import React, { useState } from "react";
import CampaignCart from "../campaign/CampaignCart";
import { Link } from "react-router-dom";


const ButtonCarousal = ({ slides, totalSlides }) => {
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const [ visibleSlides, setVisibleSlides ] = useState(5);

  const nextSlides = () => {
    if (currentSlide + visibleSlides < totalSlides) {
      setCurrentSlide((prevSlide) => prevSlide + visibleSlides);
    }
  };

  const prevSlides = () => {
    if (currentSlide - visibleSlides >= 0) {
      setCurrentSlide((prevSlide) => prevSlide - visibleSlides);
    }
  };

  return (
    <div className="flex">
      <button onClick={prevSlides} hidden={currentSlide === 0}>
        
      </button>
      <div className="flex items-center space-x-4 overflow-hidden">
        {slides
          .slice(currentSlide, currentSlide + visibleSlides)
          .map((slide, index) => (
            <div className="" key={index}>
            <CampaignCart 
            name={slide.name}
            img={slide.img}/>
             </div>
          ))}
      </div>
      {(currentSlide + visibleSlides >= totalSlides)? <Link to="/campaigns">Show more</Link> : <button
        onClick={nextSlides}
      >
        
      </button>}
     
    </div>
  );
};

export default ButtonCarousal;