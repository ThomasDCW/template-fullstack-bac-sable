import React from "react";
import Slider from "react-slick";
import SCarousel from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/imgcarousel/208.jpg";
import img1 from "../../assets/imgcarousel/624.jpg";
import img2 from "../../assets/imgcarousel/634.jpg";
import img3 from "../../assets/imgcarousel/639.jpg";
import img4 from "../../assets/imgcarousel/810.jpg";
import img5 from "../../assets/imgcarousel/835.jpg";
import img6 from "../../assets/imgcarousel/1359.jpg";
import img7 from "../../assets/imgcarousel/10831.jpg";

export default function Carousel() {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <SCarousel>
      <Slider {...settings}>
        <img src={img} alt="img" />
        <img src={img1} alt="img" />
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
        <img src={img4} alt="img" />
        <img src={img5} alt="img" />
        <img src={img6} alt="img" />
        <img src={img7} alt="img" />
      </Slider>
    </SCarousel>
  );
}
