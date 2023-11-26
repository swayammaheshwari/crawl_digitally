import React from "react";
import Card from "../ServicesSlider/assets/Card";
interface ServiceItem {
  name: string;
  discription: string;
  img: string;
}

const data: ServiceItem[] = [
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

const ServicesCard: React.FC = () => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index} className="p-5">
            <Card item={item} />
          </div>
        );
      })}
    </>
  );
};

export default ServicesCard;
