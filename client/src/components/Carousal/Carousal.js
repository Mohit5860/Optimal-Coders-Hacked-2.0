import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((c) => (c + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const slides = ["Slide1", "Slide2", "Slide3"];

  return (
    <div className="relative p-2 h-[42rem] mt-10 mb-20 bg-gray-300 flex items-center justify-center mx-72">
      <div className="text-4xl font-bold">{slides[currentSlide]}</div>
    </div>
  );
};

export default Carousel;
