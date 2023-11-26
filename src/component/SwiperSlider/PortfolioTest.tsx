import React, { useEffect } from "react";
import Swiper from "swiper";
// import "swiper/swiper-bundle.min.css"; // Import Swiper CSS

import "./SliderComponent.css";

const SliderComponent: React.FC = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      slidesPerView: 2.5,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
      },
    });

    return () => {
      swiper.destroy(); // Clean up when the component unmounts
    };
  }, []);

  useEffect(() => {
    const swiperElements = document.querySelectorAll(".myswiper");
    swiperElements.forEach((element) => {
      const elementAsHTMLElement = element as HTMLElement;
      elementAsHTMLElement.style.cursor = "url('logocrawl.ico'), auto";
      elementAsHTMLElement.style.borderRadius = "50%";
    });
  }, []);

  return (
    <div className="myswiper" style={{ position: "relative" }}>
      <div className="swiper">
        <div className="swiper-wrapper">
          {[1, 2, 3, 4].map((index) => (
            <div className="swiper-slide" key={index}>
              <div className="card">
                <div className="card__image">
                  <img src={`sliderimage/img${index}.png`} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
