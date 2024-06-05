import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    
    <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
    <Typography variant="h4">Contact My Resturant</Typography>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
      beatae ducimus magni nobis culpa praesentium velit expedita quae,
      corrupti, pariatur inventore laboriosam consectetur modi impedit
      error, repudiandae obcaecati doloribus.
    </p>
  </Box>
 
    
  );
};

export default Contact;