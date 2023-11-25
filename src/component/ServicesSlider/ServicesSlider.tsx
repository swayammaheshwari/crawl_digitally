import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/swiper.min.css"; // Import the Swiper styles
// import "./assets/style.module.css";
import Card from "./assets/Card";
import { EffectCoverflow, Pagination } from "swiper/modules";

const data = [
  {
    name: "Brand Solution",
    discription:
      "Where We Weave The Web Of Creativity. As A Power Of Bold Ideas, Vivid Storytelling, And Extraordinary Experiences",
    img: "serviceimg/brand1.png",
  },
  {
    name: "Photography & Videography",
    discription:
      "Where We Weave The Web Of Creativity. As A Power Of Bold Ideas, Vivid Storytelling, And Extraordinary Experiences",
    img: "serviceimg/photovideo1.png",
  },
  {
    name: "Social Media Marketing",
    discription:
      "Where We Weave The Web Of Creativity. As A Power Of Bold Ideas, Vivid Storytelling, And Extraordinary Experiences",
    img: "serviceimg/social1.png",
  },
  {
    name: "Performance Marketing",
    discription:
      "Where We Weave The Web Of Creativity. As A Power Of Bold Ideas, Vivid Storytelling, And Extraordinary Experiences",
    img: "serviceimg/performance1.png",
  },
  {
    name: "Influencer Marketing",
    discription:
      "Where We Weave The Web Of Creativity. As A Power Of Bold Ideas, Vivid Storytelling, And Extraordinary Experiences",
    img: "serviceimg/influencer1.png",
  },
];

const ServicesSlider: React.FC = () => {
  useEffect(() => {
    const swiperElements = document.querySelectorAll(".myswiper");
    swiperElements.forEach((element) => {
      element.style.cursor = "url('logocrawl.ico'), auto";
    });
  }, []);

  return (
    <div className="z-[999]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1.2,

          slideShadows: true,
        }}
        loop={true}
        slidesPerView={2.8}
        centeredSlides={true}
        autoplay={{ delay: 5000 }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => {
          return (
            <div key={index}>
              <SwiperSlide style={{margin:"20px"}} >
                <Card item={item} />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
