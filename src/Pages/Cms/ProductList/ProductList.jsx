import React,{useEffect,useState} from 'react'
import axiosInstance, { myproduct } from '../../../Helper/Helper'
import { Link } from 'react-router-dom'
// import SweetAlert from 'react-bootstrap-sweetalert'
import SweetAlertComponent from '../../../Sweetalert/Sweetalert'
export default function ProductList() {
  const[product, setProduct] = useState([])
  const[id_delete, setId_delete] = useState()
  const[open, setOpen] = useState(false)
  useEffect(()=>{
axiosInstance.post('/product/list')
.then(res=>{setProduct(res.data.data)})
  },[])
  console.log(product)

  const deleteProduct=async(id)=>{
    const formdata=new FormData()
    formdata.append("id",id_delete)
    try {
      const response=await axiosInstance.post("/product/remove",formdata,{
        headers:{"Content-Type":"multipart/form-data"}
      });
      setOpen(false)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
    const response = await axiosInstance.post("/product/list");
    console.log(response.data.data)
    setProduct(response.data.data);
    setOpen(false);
  }

  
  return (
    <>
     
   
       
        {/* {product.map((item)=>(
          <> 
           <div className="col-md-4">
    <div class="card" style={{width: '18rem'}}>
  <img src={myproduct(item.image)} class="card-img-top" alt="ari"/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
    <Link to="" class="btn btn-primary" onClick={()=>{
      setId_delete(item._id);
      setOpen(true)
    }}>delete</Link>
    <Link  to={`/edit`} class="btn btn-primary" >Edit</Link>
  </div>
</div>
    </div>
    </> */}

        
      <div className="container">
        <div className="row">
          {product.map((item)=>{
            return(
              <div className="col-md-4">
                 <div className="card" style={{width: '18rem'}} >
  <img src={myproduct(item.image)} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <Link to="" class="btn btn-primary" onClick={()=>{
          setId_delete(item._id);
          setOpen(true)
        }}>delete</Link>

<Link to={`/edit/${item._id}`} class="btn btn-primary" onClick={()=>{
         
        }}>Edit</Link>

  </div>
</div>
              </div>
            )
          })}
        </div>
      </div>

    

     
     {
      open && (
        <SweetAlertComponent
        confirm={deleteProduct}
        cancle={()=>setOpen(false)}
        title={"are you sure"}
        subtitle={"you will not be able to recover"}        />
      )
     }
    </>
  )
}
