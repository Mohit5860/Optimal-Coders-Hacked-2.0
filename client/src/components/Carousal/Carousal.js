import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((c) => (c + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const slides = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Nh5QvbSW1cDw-TaNMJsSefp94Vfx0PvROA&usqp=CAU",
    "https://www.centurypa.com/images/blog/Blood%20donation.jpg",
    "https://www.citysqjb.com/images/whatshappening/website_posting.jpg",
  ];

  return (
    <div className="relative p-2 h-[42rem] mt-10 mb-20flex items-center justify-center mx-5 ">
      <div className="text-4xl font-bold flex justify-center">
        <img className="h-[40rem] w-[100rem]" src={slides[currentSlide]} />
      </div>
    </div>
  );
};

export default Carousel;
