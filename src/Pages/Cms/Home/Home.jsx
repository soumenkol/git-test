import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';

// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Contact from '../Contact/Contact';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      "https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0",
  },
  {
    label: 'Bird',
    imgPath:"https://static.toiimg.com/thumb/msid-101282760,width-1280,height-720,resizemode-4/101282760.jpg"
  },
  {
    label: 'Bali, Indonesia',
    imgPath:"https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9442.jpg"
      
  }
  
];

function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = images.length;
//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
     <Box sx={{ maxWidth:"100%" ,objectFit:"cover", backgroundColor:"black"}}>
     
     <AutoPlaySwipeableViews
       axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
       index={activeStep}
       onChangeIndex={handleStepChange}
       enableMouseEvents
     >
       {images.map((step, index) => (
         <div key={index}>
           {Math.abs(activeStep - index) <= 2 ? (
             <Box
               component="img"
               sx={{
                 height:"600px",
                 display: 'block',
                 maxWidth:"100%",
                 overflow: 'hidden',
                 width: '100%',
               }}
               src={step.imgPath}
               alt={step.label}
             />
           ) : null}
         </div>
       ))}
     </AutoPlaySwipeableViews>
     {/* <MobileStepper
       steps={maxSteps}
       position="static"
       activeStep={activeStep}
       nextButton={
         <Button
           size="small"
           onClick={handleNext}
           disabled={activeStep === maxSteps - 1}
         >
           Next
           {theme.direction === 'rtl' ? (
             <KeyboardArrowLeft />
           ) : (
             <KeyboardArrowRight />
           )}
         </Button>
       }
       backButton={
         <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
           {theme.direction === 'rtl' ? (
             <KeyboardArrowRight />
           ) : (
             <KeyboardArrowLeft />
           )}
           Back
         </Button>
       }
     /> */}
    </Box>
   <Menu/>
   <About/>
   <Contact/>
    </>
   
  );
}
export default Home;