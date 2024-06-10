import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const Modal = ({ items, Close }) => {
    const{title,discription,image}= items;
  return (

      <div className="absolute    w-[477px] z-20 bg-white shadow-xl rounded-3xl left-[30%]  top-[18%]">
        <div className="relative">
          <img className="w-full h-80" src={image} alt="" />
          <button
            onClick={() => Close()}
            className="text-3xl font-bold  absolute top-3 text-white right-3"
          >
            <RxCrossCircled className="text-black"/>
          </button>
        <div className="pt-6 pb-9 text-center">
        <h2 className="text-3xl font-medium">{title}</h2>
        <p className="w-[312px] mx-auto pt-6">{discription}</p>
        </div>
        </div>
      </div>

  );
};

export default Modal;
