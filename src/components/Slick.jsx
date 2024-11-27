import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slickOne from "../assets/images/about-1img.webp";
import slickTwo from "../assets/images/about-2img.webp";
import slickThree from "../assets/images/about-3img.webp";
import slickFour from "../assets/images/blank.webp";

const SlickSliderExample = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h2> React Slick Slider </h2>
      <Slider {...settings}>
        <div>
         <img className="image" src={slickOne} alt="slider-1" />
        </div>
        <div>
        <img className="image" src={slickTwo} alt="slider-1" />
        </div>
        <div>
        <img className="image" src={slickThree} alt="slider-1" />
        </div>
        <div>
        <img className="image" src={slickFour} alt="slider-1" />
        </div>
      </Slider>
    </div>
  );
};

export default SlickSliderExample;
