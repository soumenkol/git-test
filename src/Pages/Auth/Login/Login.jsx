// import {
//     Avatar,
//     Box,
//     Button,
//     Container,
//     Grid,
//     Paper,
//     TextField,
//     Typography,
//   } from "@mui/material";
//   import React, { useState } from "react";
  
//   import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
//   import { Link } from "react-router-dom";
//   import { styled } from "@mui/material/styles";
  
//   import CloudUploadIcon from "@mui/icons-material/CloudUpload";
  
//   const VisuallyHiddenInput = styled("input")({
//     clip: "rect(0 0 0 0)",
//     clipPath: "inset(50%)",
//     height: 1,
//     overflow: "hidden",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     whiteSpace: "nowrap",
//     width: 1,
//     margin: "10px",
//   });
  
//   const Login = () => {
//     const [user, setUser] = useState({
//       f_name: "",
//       l_name: "",
//       email: "",
//       password: "",
//     });
  
    
  
    
  
//     const { f_name, l_name, email, password } = user;
//     const [error, setError] = useState({});
//     const validation = () => {
//       let error = {};
//       const regName = /^[a-zA-Z]+$/;
//       const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//       const regex1 =
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/i;
//       if (!f_name) {
//         error.f_name = "First name is required";
//       }
//       if (!l_name) {
//         error.l_name = "Last name is required";
//       } else if (!regName.test(f_name)) {
//         error.f_name = "First Name must contain only characters";
//       } else if (!regName.test(l_name)) {
//         error.l_name = "Last Name must contain only characters";
//       }
//       if (!email) {
//         error.email = "Email  is required";
//       } else if (!regex.test(email)) {
//         error.email = "email is required";
//       }
  
      
//       if (!password) {
//         error.password = "Password  is required";
//       } else if (!regex1.test(password)) {
//         error.password =
//           "Minimum 6 and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character";
//       }
//       return error;
//     };
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
  
//       if (name === "f_name") {
//         if (value.length === 0) {
//           setError({ ...error, f_name: "Frist name is required" });
//           setUser({ ...user, f_name: "" });
//         } else {
//           setError({ ...error, f_name: "" });
//           setUser({ ...user, f_name: value });
//         }
//       }
//       if (name === "l_name") {
//         if (value.length === 0) {
//           setError({ ...error, l_name: "Last name is required" });
//           setUser({ ...user, l_name: "" });
//         } else {
//           setError({ ...error, l_name: "" });
//           setUser({ ...user, l_name: value });
//         }
//       }
//       if (name === "email") {
//         if (value.length === 0) {
//           setError({ ...error, email: "Email is required" });
//           setUser({ ...user, email: "" });
//         } else {
//           setError({ ...error, email: "" });
//           setUser({ ...user, email: value });
//         }
//       }
//       if (name === "password") {
//         if (value.length === 0) {
//           setError({ ...error, password: "password is required" });
//           setUser({ ...user, password: "" });
//         } else {
//           setError({ ...error, password: "" });
//           setUser({ ...user, password: value });
//         }
//       }
//     };
  
    
  
//     const handelSubmit = (e) => {
//       e.preventDefault();
//       setError(validation());
//       // console.log(user);
//       setUser({
//         f_name: "",
//         l_name: "",
//         email: "",
//         password: "",
//       });
//     };
//     return (
//       <>
//         <Container component="main">
//           <Paper
//             sx={{
//               width: "500px",
//               margin: "0 auto",
//               height: "500px",
//               marginTop: "10px",
//               paddingTop: "5px",
//             }}
//             elevation={20}
//           >
//             <Box>
//               <Avatar
//                 sx={{
//                   m: 1,
//                   bgcolor: "primary.main",
//                   margin: "0 auto",
//                   marginTop: "5px",
//                 }}
//               >
//                 <LockOutlinedIcon />
//               </Avatar>
//             </Box>
  
//             <Box>
//               <Typography variant="h4" pt={3} textAlign={"center"}>
//                 Sign In
//               </Typography>
//             </Box>
//             <Box component={"form"} m={3}>
//               <Grid container>
//                 <Grid item md={12}>
//                   <TextField
//                     id="outlined-basic"
//                     label="Email"
//                     variant="outlined"
//                     placeholder="Enter your Email"
//                     fullWidth
//                     margin="normal"
//                     color="secondary"
//                     value={email}
//                     onChange={handleChange}
//                     name="email"
//                     required
//                   />
//                   <span style={{ color: "red" }}>
//                     {""}
//                     {error.email}
//                     {""}
//                   </span>
//                 </Grid>
//                 <Grid item md={12}>
//                   <TextField
//                     id="outlined-basic"
//                     label="PassWord"
//                     variant="outlined"
//                     placeholder="Enter your Password"
//                     fullWidth
//                     margin="normal"
//                     color="secondary"
//                     value={password}
//                     onChange={handleChange}
//                     name="password"
//                     required
//                   />
//                   <span style={{ color: "red" }}>
//                     {""}
//                     {error.password}
//                     {""}
//                   </span>
//                 </Grid>
               
//               </Grid>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 fullWidth
//                 size="large"
//                 onClick={handelSubmit}
//               >
//                 SIGN IN
//               </Button>
//               <Grid container justifyContent="flex-end">
//                 <Grid item>
//                   <Link to="/Registration" sx={{cursor:"pointer"}}>
//                     Don't have an account? Sign Up
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Paper>
//         </Container>
//       </>
//     );
//   };
  
//   export default Login;
  
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { toast } from "react-toastify";
  import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
  import { Link, useNavigate } from "react-router-dom";
  import { styled } from "@mui/material/styles";
  
  import CloudUploadIcon from "@mui/icons-material/CloudUpload";
  import axios from "axios";
import axiosInstance from "../../../Helper/Helper";
  
  
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
    margin: "10px",
  });
  
  const Login = () => {
    const navigate=useNavigate()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({
      
      email: "",
      password: "",
    });
  
    const { email, password } = user;
    const [error, setError] = useState({});
    const validation = () => {
      let error = {};
      const regName = /^[a-zA-Z]+$/;
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      const regex1 =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/i;
     
      if (!email) {
        error.email = "Email  is required";
      } else if (!regex.test(email)) {
        error.email = "email is required";
      }
  
      
      if (!password) {
        error.password = "Password  is required";
      } else if (!regex1.test(password)) {
        error.password =
          "Minimum 6 and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character";
      }
      return error;
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      
      
      if (name === "email") {
        if (value.length === 0) {
          setError({ ...error, email: "Email is required" });
          setUser({ ...user, email: "" });
        } else {
          setError({ ...error, email: "" });
          setUser({ ...user, email: value });
        }
      }
      if (name === "password") {
        if (value.length === 0) {
          setError({ ...error, password: "password is required" });
          setUser({ ...user, password: "" });
        } else {
          setError({ ...error, password: "" });
          setUser({ ...user, password: value });
        }
      }
    };
  
    
  
    const handelSubmit =async (e) => {
      e.preventDefault();
      setError(validation());
      // console.log(user);
      const formData=new FormData();
      formData.append("email",email);
      formData.append("password",password)
  
      try {
        setLoading(false)
        const response=await axiosInstance.post(
          "user/signin",
        formData,{
        
          headers:{"Content-Type":"multipart/form-data"}
         
        }
        );
        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log(response)
        if (response.data.status === 200) {
          toast.success("Logged in successfully");
          const token = response.data.token;
          localStorage.setItem("token", token);
          setLoading(true)
          setTimeout(() => {
            navigate("/");
           }, 4000);
        } else {
          toast.error("login error");
          setLoading(true);
        }
      } catch (error) {
        console.log(error);
      }
  
      setUser({
       
        email: "",
        password: "",
      });
    };
    return (
      <>
        <Container component="main">
          <Paper
            sx={{
              width: "500px",
              margin: "0 auto",
              height: "500px",
              marginTop: "10px",
              paddingTop: "5px",
            }}
            elevation={20}
          >
            <Box>
              <Avatar
                sx={{
                  m: 1,
                  bgcolor: "primary.main",
                  margin: "0 auto",
                  marginTop: "5px",
                }}
              >
                <LockOutlinedIcon />
              </Avatar>
            </Box>
  
            <Box>
              <Typography variant="h4" pt={3} textAlign={"center"}>
                Sign In
              </Typography>
            </Box>
            <Box component={"form"} m={3}>
              <Grid container>
                <Grid item md={12}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    placeholder="Enter your Email"
                    fullWidth
                    margin="normal"
                    color="secondary"
                    value={email}
                    onChange={handleChange}
                    name="email"
                    required
                  />
                  <span style={{ color: "red" }}>
                    {""}
                    {error.email}
                    {""}
                  </span>
                </Grid>
                <Grid item md={12}>
                  <TextField
                    id="outlined-basic"
                    label="PassWord"
                    variant="outlined"
                    placeholder="Enter your Password"
                    fullWidth
                    margin="normal"
                    color="secondary"
                    value={password}
                    onChange={handleChange}
                    name="password"
                    required
                  />
                  <span style={{ color: "red" }}>
                    {""}
                    {error.password}
                    {""}
                  </span>
                </Grid>
               
              </Grid>
              {loading ? (
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                type="submit"
                onClick={handelSubmit}
              >
                SIGN IN
              </Button>
            ) : (
              <Button
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              type="submit"
              
            >
             Loading.....
            </Button>
            )}

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/Registration" sx={{cursor:"pointer"}}>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </>
    );
  };
  
  export default Login;