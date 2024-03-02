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
    "https://imgs.search.brave.com/uzTBDkV8cXd7vDWxe-fwZ05UPyDheS2OEoe-zrYwAuw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZ29vZG1v/cm5pbmdsb3ZlcXVv/dGUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzEwL0Js/b29kLURvbmF0aW9u/LXF1b3Rlcy1Jcy1B/LUdyZWF0LUFjdC1P/Zi1LaW5kbmVzcy0z/LmpwZz9maXQ9MTAy/NCw1NzYmc3NsPTE",
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
