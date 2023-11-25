import React, { useEffect } from "react";
import "./style.module.css";
const Card: React.FC = ({ item }) => {
  return (
    <>
     

      <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow">
        <div className="p-5">
          <a href="#">
            <img className="rounded-t-lg w-full" src={item.img} alt="" />
          </a>
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 font-['Sora'] text-2xl font-bold tracking-tight text-black ">
              {item.name}
            </h5>
          </a>
          <p className="mb-3 font-['Montserrat'] pb-6  font-normal text-black ">
            {item.discription}
          </p>
        </div>
      </div>
    </>
  );
};
export default Card;
