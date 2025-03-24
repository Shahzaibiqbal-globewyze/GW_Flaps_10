'use client';
import React, { useRef } from 'react';
import Slider from "react-slick";
import Image from "next/image";
import Slide1 from "../assets/FlapsTen/Features 1.png";
import Slide2 from "../assets/FlapsTen/Features 2.png";

const AutoScrollingSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative mx-auto w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <Image
            src={Slide1}
            alt="Slide 1"
            className="rounded-lg object-cover"
            style={{ width: "100%", height: "100%" }}
            priority
          />
        </div>
        <div>
          <Image
            src={Slide2}
            alt="Slide 2"
            className="rounded-lg object-cover"
            style={{ width: "100%", height: "100%" }}
            priority
          />
        </div>
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-900 text-2xl z-10"
    onClick={onClick}
  >
    &rarr;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-900 text-2xl z-10"
    onClick={onClick}
  >
    &larr;
  </div>
);

export default AutoScrollingSlider;
