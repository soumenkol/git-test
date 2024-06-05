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
//   import axios from "axios"
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
  
//   const Registration = () => {
//     const [user, setUser] = useState({
//       first_name: "",
//       last_name: "",
//       email: "",
//       password: "",
//     });
  
//      const [image, setImage] = useState();
    
//     // image?console.log(image.name):console.log("");;
    
//     const { first_name, last_name, email, password } = user;
//     const [error, setError] = useState({});
//     const validation = () => {
//       let error = {};
//       const regName = /^[a-zA-Z]+$/;
//       const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//       const regex1 =
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/i;
//       if (!first_name) {
//         error.first_name = "First name is required";
//       }
//       if (!last_name) {
//         error.last_name = "Last name is required";
//       } else if (!regName.test(first_name)) {
//         error.first_name = "First Name must contain only characters";
//       } else if (!regName.test(last_name)) {
//         error.last_name = "Last Name must contain only characters";
//       }
//       if (!email) {
//         error.email = "Email  is required";
//       } else if (!regex.test(email)) {
//         error.email = "email is required";
//       }
  
//       if (!image) {
//         error.image = "Image  is required";
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
      
//       if (name === "first_name") {
//         if (value.length === 0) {
//           setError({ ...error, first_name: "Frist name is required" });
//           setUser({ ...user, first_name: "" });
//         } else {
//           setError({ ...error, first_name: "" });
//           setUser({ ...user, first_name: value });
//         }
//       }
//       if (name === "last_name") {
//         if (value.length === 0) {
//           setError({ ...error, last_name: "Last name is required" });
//           setUser({ ...user, last_name: "" });
//         } else {
//           setError({ ...error, last_name: "" });
//           setUser({ ...user, last_name: value });
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
  
//     const image_change = (e) => {
//       const file = e.target.files[0];
//       if (!file) {
//         setError({ ...error, image: "Image is required" });
//         setImage(null);
//       } else {
//         setError({ ...error, image: "" });
  
//         setImage(file);
//         // console.log(file);
//       }
//     };
  
//     const handelSubmit =async (e) => {
//       e.preventDefault();
//       setError(validation());
//       // console.log(user);
//       const formdata = new FormData();
//       formdata.append("email",email);
//       formdata.append("password",password);

//       try{
//         const response = await axios.post(
//           "https://wtsacademy.dedicateddevelopers.us/api/user/signin",
//           formdata,
//           {
//             headers:{"Content-Type": "multipart/form-data"},
//           }
//         );
//         console.log(response);
//       }catch(error){
//         console.log(error);
//       }
//     }
//       setUser({
//         first_name: "",
//         last_name: "",
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
//               height: "750px",
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
//                 Sign Up
//               </Typography>
//             </Box>
//             <Box component={"form"} m={3}>
//               <Grid container spacing={2}>
//                 <Grid item md={6}>
//                   <TextField
//                     className=""
                    
  
//                     id="outlined-basic"
//                     label="First Name"
//                     variant="outlined"
//                     placeholder="Enter your First Name"
//                     fullWidth
//                     margin="normal"
//                     color="secondary"
//                     value={first_name}
//                     onChange={handleChange}
//                     name="first_name"
//                     required
//                   />
//                   <span style={{ color: "red" }}>
//                     {""}
//                     {error.first_name}
//                     {""}
//                   </span>
//                 </Grid>
//                 <Grid item md={6}>
//                   <TextField
//                     id="outlined-basic"
//                     label="Last Name"
//                     variant="outlined"
//                     placeholder="Enter your Last Name"
//                     fullWidth
//                     margin="normal"
//                     color="secondary"
//                     value={last_name}
//                     onChange={handleChange}
//                     name="last_name"
//                     required
//                   />
//                   <span style={{ color: "red" }}>
//                     {""}
//                     {error.last_name}
//                     {""}
//                   </span>
//                 </Grid>
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
//                 <Grid container>
//                   <Grid item md={8}>
//                     <Box margin={5}>
//                       <Button
//                         component="label"
//                         role={undefined}
//                         variant="contained"
//                         name="image"
//                         tabIndex={-1}
//                         onChange={image_change}
//                         startIcon={<CloudUploadIcon />}
//                         margin="normal"
//                         required
//                       >
//                         Upload Picture
//                         <VisuallyHiddenInput type="file" />
//                       </Button>
//                       <span style={{ color: "red" }}>
//                         {""}
//                         {error.image}
//                         {""}
//                       </span>
//                     </Box>
//                   </Grid>
                  
//                 </Grid>
//               </Grid>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 fullWidth
//                 size="large"
//                 onClick={handelSubmit}
//               >
//                 Sign Up
//               </Button>
//               <Grid container justifyContent="flex-end">
//                 <Grid item>
//                   <Link to="/Login" sx={{cursor:"pointer"}}>
//                     Already have an account? Sign in
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Paper>
//         </Container>
//       </>
//     );
   
//               }
              
//   export default Registration;
  
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

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

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

const Registration = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  // const [image, setImage] = useState();
  const [img, setimg] = useState("");

  // image?console.log(image.name):console.log("");;

  const { first_name, last_name, email, password } = user;
  const [error, setError] = useState({});
  const validation = () => {
    let error = {};
    const regName = /^[a-zA-Z]+$/;
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regex1 =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/i;
    if (!first_name) {
      error.first_name = "First name is required";
    }
    if (!last_name) {
      error.last_name = "Last name is required";
    } else if (!regName.test(first_name)) {
      error.first_name = "First Name must contain only characters";
    } else if (!regName.test(last_name)) {
      error.last_name = "Last Name must contain only characters";
    }
    if (!email) {
      error.email = "Email  is required";
    } else if (!regex.test(email)) {
      error.email = "email is required";
    }

    // if (!image) {
    //   error.image = "Image  is required";
    // }
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

    if (name === "first_name") {
      if (value.length === 0) {
        setError({ ...error, first_name: "Frist name is required" });
        setUser({ ...user, first_name: "" });
      } else {
        setError({ ...error, first_name: "" });
        setUser({ ...user, first_name: value });
      }
    }
    if (name === "last_name") {
      if (value.length === 0) {
        setError({ ...error, last_name: "Last name is required" });
        setUser({ ...user, last_name: "" });
      } else {
        setError({ ...error, last_name: "" });
        setUser({ ...user, last_name: value });
      }
    }
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

  // const image_change = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) {
  //     setError({ ...error, image: "Image is required" });
  //     setImage(null);
  //   } else {
  //     setError({ ...error, image: "" });

  //     setImage(file);
  //     // console.log(file);
  //   }
  // };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setError(validation());
    // console.log(user);
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image",img)

    try {
      const response = await axios.post(
        "https://wtsacademy.dedicateddevelopers.us/api/user/signup",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setUser({
      first_name: "",
      last_name: "",
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
            height: "750px",
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
              Sign Up
            </Typography>
          </Box>
          <Box component={"form"} m={3}>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  className=""
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  placeholder="Enter your First Name"
                  fullWidth
                  margin="normal"
                  color="secondary"
                  value={first_name}
                  onChange={handleChange}
                  name="first_name"
                  required
                />
                <span style={{ color: "red" }}>
                  {""}
                  {error.first_name}
                  {""}
                </span>
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  placeholder="Enter your Last Name"
                  fullWidth
                  margin="normal"
                  color="secondary"
                  value={last_name}
                  onChange={handleChange}
                  name="last_name"
                  required
                />
                <span style={{ color: "red" }}>
                  {""}
                  {error.last_name}
                  {""}
                </span>
              </Grid>
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
              <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Image
                 </label>                  
                 <input
                    type="file"
                   onChange={(e) => setimg(e.target.files[0])}
                    name="img"
                     accept="image/*"
                    class="form-control"
                   />
                   {img !== "" && img !== undefined && img !== null ? (
                    <img
                       style={{ height: "180px" }}
                       src={URL.createObjectURL(img)}
                      alt=""
                      className="upload-img"
                     />
                   ) : (
                     <>{img === "" && <p>Drag or drop content here</p>}</>
                  )}
                 </div>



              {/* <Grid container>
                  <Grid item md={8}>
                    <Box margin={5}>
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        name="image"
                        tabIndex={-1}
                        onChange={image_change}
                        startIcon={<CloudUploadIcon />}
                        margin="normal"
                        required
                      >
                        Upload Picture
                        <VisuallyHiddenInput type="file" />
                      </Button>
                      <span style={{ color: "red" }}>
                        {""}
                        {error.image}
                        {""}
                      </span>
                    </Box>
                  </Grid>
                  
                </Grid> */}
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              onClick={handelSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/Login" sx={{ cursor: "pointer" }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Registration;