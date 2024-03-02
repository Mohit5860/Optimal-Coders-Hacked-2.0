import React, { useState } from "react";
import CampaignCart from "../campaign/CampaignCart";
import { Link, useNavigate } from "react-router-dom";

const ButtonCarousal = ({ slides, totalSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(5);
  const navigate = useNavigate();

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
    <div className="flex m-5 p-5">
      <button onClick={prevSlides} hidden={currentSlide === 0}>
        {" "}
        <p className="text-2xl"> Prev </p>{" "}
      </button>
      <div className="flex justify-between w-full">
        {slides
          .slice(currentSlide, currentSlide + visibleSlides)
          .map((slide, index) => (
            <div className=" " key={index}>
              <CampaignCart name={slide.name} img={slide.img} />
            </div>
          ))}
      </div>
      {currentSlide + visibleSlides >= totalSlides ? (
        <button
          onclick={() => {
            navigate("/campaigns/id");
          }}
        >
          <p className="text-2xl"> Show More </p>
        </button>
      ) : (
        <button onClick={nextSlides}>
          <p className="text-2xl"> Next </p>
        </button>
      )}
    </div>
  );
};

export default ButtonCarousal;
