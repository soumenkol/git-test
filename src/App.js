
import './App.css';
import { lazy,Suspense} from "react"
import { Navigate } from 'react-router-dom';
import Header from "../src/Pages/Layout/Header/Header"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Loading from './Pages/Loader/Loading';
// import Home from "../src/Pages/Cms/Home/Home"
const Home = lazy(()=>import("../src/Pages/Cms/Home/Home"))
//  import Menu from './Pages/Cms/Menu/Menu';
const Menu = lazy(()=>import('./Pages/Cms/Menu/Menu'))
//  import About from './Pages/Cms/About/About';
const About = lazy(()=>import('./Pages/Cms/About/About'))
//  import Contact from './Pages/Cms/Contact/Contact';
const Contact = lazy(()=>import('./Pages/Cms/Contact/Contact'))
// import Footer from './Pages/Layout/Footer/Footer';
const Footer = lazy(()=>import('./Pages/Layout/Footer/Footer'))
// import Login from './Pages/Auth/Login/Login';
const Login = lazy(()=>import('./Pages/Auth/Login/Login'))
// import Registration from './Pages/Auth/Registration/Registration';
const Registration = lazy(()=>import('./Pages/Auth/Registration/Registration'))
// import ProductList from './Pages/Cms/ProductList/ProductList';
const ProductList = lazy(()=>import('./Pages/Cms/ProductList/ProductList'))
// import { Navigate } from 'react-router-dom';
// import Create from './Create/Create';
const Create = lazy(()=>import('./Create/Create'))
// import Edit from './Pages/Cms/Edit/Edit';
const Edit = lazy(()=>import('./Pages/Cms/Edit/Edit'))
// import { lazy,Suspense} from "react"
function App() {
  function PrivateRoute({children}){
    console.log(children,"children");
    const token = 
    localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !=null && token !== undefined?(
      children
    ):(
      <>
      <Navigate to="/"/>
      {alert("Please go for login either you can't access product list ")}
      </>
    );
  }
  const PublicRouterNames = [
    {
      path:"Registration",
      Component:<Registration/>,
    },

    {
      path:"Login",
      Component:<Login/>,
    },
    {
      path:"/",
      Component:<Home/>,
    },
    {
      path:"/Menu",
      Component:<Menu/>,
    },
    {
      path:"/About",
      Component:<About/>,
    },
    {
      path:"/Contact",
      Component:<Contact/>,
    },
    {
      path:"/create",
      Component:<Create/>,
    }
  ];


  const PrivateRouterNames = [
    {
      path:"ProductList",
      Component:<ProductList/>,
    },
    {
      path:"/edit/:id",
      Component:<Edit/>,
    }
  ];



  return (
    // <div className="App">
    //  {/* <Router>
    //   <Header/>
    //     <Routes>
    //       <Route path='/Home'  element={<Home/>}/>
    //       <Route path='/Menu' element={<Menu/>}/>
    //       <Route path='/About' element={<About/>}/>
    //       <Route path='/Contact' element={<Contact/>}/>
    //       <Route path='/Login' element={<Login/>}/>
    //       <Route path='Registration' element={<Registration/>}/>
    //     </Routes>
    //     <Footer/> */}
    //   {/* </Router> */}

    // </div>
    <>
    <Suspense fallback={<Loading/>}>
    <Router>
      <Header/>
      <Routes>
        {PublicRouterNames?.map((route,index)=>{
          return(
           
            <Route exact path={route.path} element={route.Component} />
          );
        })}

        {PrivateRouterNames?.map((route,index)=>{
          return(
            <Route path={route.path}
            element={<PrivateRoute> {route.Component} </PrivateRoute>} />
          );
        })}
      </Routes>
      <Footer/>
    </Router>
    </Suspense>
    </>
  );
}

export default App;
