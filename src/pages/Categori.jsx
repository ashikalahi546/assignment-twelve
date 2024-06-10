import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../component/Modal/Modal";

const Categori = ({ categori,handleModal}) => {
  const { title, image, id } = categori;

  return (
    <div className="shadow   rounded-3xl w-full relative">
      <img className="w-full" src={image} alt="" />
      <div className="flex flex-col items-center">
        <p className=" lg:text-2xl text-lg font-medium pt-3 ">{title}</p>

          <button onClick={()=>handleModal(categori)} className="text-primary font-medium pt-1 pb-3">
            Learn more
          </button>
     
      </div>
         
    </div>
  );
};

export default Categori;
