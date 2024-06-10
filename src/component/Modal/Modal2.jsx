import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const Modal2 = ({ item, close }) => {
  const [rating, setRating] = useState(0);
//   console.log(item);
  const { title, price, star, image } = item;
  return (
    <div className="absolute top-2  z-20  w-96 bg-white shadow-xl rounded-3xl left-[37%]">
      <div className="relative">
        <img className="w-full h-72" src={image} alt="" />
        <button
          onClick={() => close()}
          className="text-3xl font-bold  absolute top-3 text-white right-3"
        >
          <RxCrossCircled className="text-black"/>
        </button>
        <div className="pt-6 pb-9  flex flex-col items-center text-center">
          <span className="pb-2">
            <Rating
              style={{ maxWidth: 100 }}
              value={star}
              onChange={setRating}
            />
          </span>
          <h2 className="text-3xl font-medium">{title}</h2>
          <p className="pt-4  text-xl font-medium">${price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
