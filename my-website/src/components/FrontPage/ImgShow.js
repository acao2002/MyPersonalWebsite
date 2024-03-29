import React from 'react';
import './ImgShow.css';

const FadeExample = () => {
  const fadeImages = [
    "assets/img/an/an.jpeg",
    "assets/img/an/an2.jpeg",
    "assets/img/an/an3.jpeg",
    "assets/img/an/an4.jpeg",
    "assets/img/an/an5.jpg",
  ];

  return (
    
      
    <div className="container">
      <div id ="ic">  
      
        <img 
            alt="background "
            className="background mt-5 p4" 
            src={fadeImages[1]}style={{"position":"absolute", "zIndex":-1, objectFit:'contain', height: '90%', width: '90%',}}/>
        <img 
            alt="background "
            className="background mt-5 p2" 
            src={fadeImages[2]}style={{"position":"absolute", "zIndex":-1, objectFit:'contain', height: '90%', width: '90%',}}/>
        <img 
            alt="background "
            className="background mt-5 p3" 
            src={fadeImages[3]}style={{"position":"absolute", "zIndex":-1, objectFit:'contain', height: '90%', width: '90%',}}/>
        <img 
            alt="background "
            className="background mt-5 p1" 
            src={fadeImages[4]}style={{"position":"absolute", "zIndex":-1, objectFit:'contain', height: '90%', width: '90%',}}/>
        <img 
            alt="background "
            className="background mt-5 p5" 
            src={fadeImages[0]}style={{"position":"absolute", "zIndex":-1, objectFit:'contain', height: '90%', width: '90%',}}/>
      </div>
    </div>
  );
};

export default FadeExample;