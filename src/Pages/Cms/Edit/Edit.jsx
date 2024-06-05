// import React from 'react'

// export default function Edit() {
//   return (
//     <div>Edit</div>
//   )
// }


// import { Box, Typography, TextField, Button } from "@mui/material";
// // import zIndex from "@mui/material/styles/zIndex";
// import React, { useState } from "react";
// import axiosInstance from '../../../../src/Helper/Helper'
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";

// const Edit = () => {
//     const {id}=useParams();
//     const [det,setDet]=useState([])
    

//   const [data, setdata] = useState({
//     title: "",
//     description: "",
//   });
//   const [img, setimg] = useState("");
//   const [error, setError] = useState("");
//   const { title, description } = data;
//   const validation = () => {
//     const error = {};
//     if (!title) {
//       error.title = "Title is required";
//     }
//     if (!description) {
//       error.description = "Description  is required";
//     }
//     return error;
//   };
//   useEffect(() => {
//     axiosInstance
//       .get(`/product/detail/${id}`)
//       .then((res) => {
//         // console.log(res.data.data);
//         setDet(res.data.data)
       
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   useEffect(()=>{
//     if (det)
//      {
//         setDet({
//             title:det.title,
//             description:det.description,
//           });
        
//     } 

//   },[])
//   // console.log(det.title);

//   const handleChange = (e) => {
//     // const name = e.target.name;
//     // setdata({ ...data, [name]: e.target.value });
//     const { name, value } = e.target;
//     if (name === "title") {
//       if (value.length === 0) {
//         setError({ ...error, title: "Title is required" });
//         setdata({ ...data, title: "" });
//       } else {
//         setError({ ...error, title: "" });
//         setdata({ ...data, title: value });
//       }
//     }
//     if (name === "description") {
//       if (value.length === 0) {
//         setError({ ...error, description: "Description is required" });
//         setdata({ ...data, description: "" });
//       } else {
//         setError({ ...error, description: "" });
//         setdata({ ...data, description: value });
//       }
//     }
//   };
//   const handleClick = async (e) => {
//     e.preventDefault();
//     setError(validation());
//     const formData = new FormData();
//     formData.append("id",id)
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("image", img);
//     try {
//       const response = await axiosInstance.post("/product/update", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       // setdata(response.data);
//       console.log("create-data", response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//     setdata({
//       title: "",
//       description: "",
//     });
//   };
//   return (
//     <div sx={{ backgroundColor: "black" }}>
//       <Box
//         sx={{
//           height: "500px",
//           width: "500px",
//           textAlign: "center",
//           // border: "2px solid red",
//           margin: "0 auto",
//           padding: "10px",
//           marginTop: "80px",
//           marginBottom: "50px",
//         }}
//         component={"div"}
//       >
//         <Box
//           component={"form"}
//           sx={{ zIndex: "10", margin: "10px", padding: "10px" }}
//           boxShadow={5}
//         >
//           <Typography
//             variant="h5"
//             fontSize={"2rem"}
//             fontWeight={"800"}
//             color={"lightblue"}
//           >
//             Create Data
//           </Typography>
//           <TextField
//             id="title"
//             label="Enter Your Title"
//             variant="outlined"
//             fullWidth
//             name="title"
//             placeholder="Enter Your Title"
//             value={det.title}
//             color="warning"
//             sx={{ marginTop: "20px" }}
//             onChange={handleChange}
//             required
//           />
//           <span style={{ color: "red", margin: "5px" }}>{error.title}</span>
//           <TextField
//             id="description"
//             label="Enter Your Description"
//             variant="outlined"
//             fullWidth
//             name="description"
//             placeholder="Enter Your Description"
//             value={det.description}
//             color="warning"
//             sx={{ marginTop: "20px" }}
//             onChange={handleChange}
//             required
//           />
//           <span style={{ color: "red", margin: "5px" }}>
//             {error.description}
//           </span>

//           <div class="mb-3">
//             <label for="exampleInputPassword1" class="form-label">
//               Image{" "}
//             </label>
//             <input
//               type="file"
//               onChange={(e) => setimg(e.target.files[0])}
//               name="img"
//               accept="image/*"
//               class="form-control"
//             />
//             {img !== "" && img !== undefined && img !== null ? (
//               <img
//                 style={{ height: "200px" }}
//                 src={URL.createObjectURL(img)}
//                 alt=""
//                 className="upload-img"
//               />
//             ) : (
//               <>{img === "" && <p>Drag or drop content here</p>}</>
//             )}
//           </div>

//           <Button
//             variant="outlined"
//             size="large"
//             sx={{ marginTop: "20px", backgroundColor: "#cb2d1b" }}
//             color="info"
//             onClick={handleClick}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Edit;

import { Box, Typography, TextField, Button } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React, { useState } from "react";
import axiosInstance from '../../../../src/Helper/Helper'
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Edit = () => {
    const {id}=useParams();
    const [det,setDet]=useState([])
    

  const [data, setdata] = useState({
    
    title: "",
    description: "",
  });
  const [img, setimg] = useState("");
  const [error, setError] = useState("");
  const { title, description } = data;
  const validation = () => {
    const error = {};
    if (!title) {
      error.title = "Title is required";
    }
    if (!description) {
      error.description = "Description  is required";
    }
    return error;
  };
  useEffect(() => {
    axiosInstance
      .get(`/product/detail/${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setDet(res.data.data)
       
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(()=>{
    if (det!==null)
     {
        setDet({
            title:det.title,
            description:det.description,
          });
        
    } 

  },[])
  console.log(det.title);

  const handleChange = (e) => {
    // const name = e.target.name;
    // setdata({ ...data, [name]: e.target.value });
    const { name, value } = e.target;
    if (name === "title") {
      if (value.length == 0) {
        setError({ ...error, title: "Title is required" });
        setdata({ ...data, title: "" });
      } else {
        setError({ ...error, title: "" });
        setdata({ ...data, title: value });
      }
    }
    if (name === "description") {
      if (value.length == 0) {
        setError({ ...error, description: "Description is required" });
        setdata({ ...data, description: "" });
      } else {
        setError({ ...error, description: "" });
        setdata({ ...data, description: value });
      }
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    setError(validation());
    const formData = new FormData();
    formData.append("title", title);
    formData.append("id",id)
    formData.append("description", description);
    formData.append("image", img);
    try {
      const response = await axiosInstance.post("/product/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // setdata(response.data);
      console.log("create-data", response.data);
    } catch (error) {
      console.log(error);
    }
    setdata({
      title: "",
      description: "",
    });
  };
  return (
    <div sx={{ backgroundColor: "black" }}>
      <Box
        sx={{
          height: "500px",
          width: "500px",
          textAlign: "center",
          // border: "2px solid red",
          margin: "0 auto",
          padding: "10px",
          marginTop: "80px",
          marginBottom: "50px",
        }}
        component={"div"}
      >
        <Box
          component={"form"}
          sx={{ zIndex: "10", margin: "10px", padding: "10px" }}
          boxShadow={5}
        >
          <Typography
            variant="h5"
            fontSize={"2rem"}
            fontWeight={"800"}
            color={"lightblue"}
          >
            Create Data
          </Typography>
          <TextField
            id="title"
            label="Enter Your Title"
            variant="outlined"
            fullWidth
            name="title"
            placeholder="Enter Your Title"
            value={title}
            color="warning"
            sx={{ marginTop: "20px" }}
            onChange={handleChange}
            required
          />
          <span style={{ color: "red", margin: "5px" }}>{error.title}</span>
          <TextField
            id="description"
            label="Enter Your Description"
            variant="outlined"
            fullWidth
            name="description"
            placeholder="Enter Your Description"
            value={description}
            color="warning"
            sx={{ marginTop: "20px" }}
            onChange={handleChange}
            required
          />
          <span style={{ color: "red", margin: "5px" }}>
            {error.description}
          </span>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Image{" "}
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
                style={{ height: "200px" }}
                src={URL.createObjectURL(img)}
                alt=""
                className="upload-img"
              />
            ) : (
              <>{img === "" && <p>Drag or drop content here</p>}</>
            )}
          </div>

          <Button
            variant="outlined"
            size="large"
            sx={{ marginTop: "20px", backgroundColor: "#cb2d1b" }}
            color="info"
            onClick={handleClick}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Edit;

