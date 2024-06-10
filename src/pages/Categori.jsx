import React from "react";
import { Link } from "react-router-dom";

const Categori = ({ categori }) => {
  const { title, image, id } = categori;

  return (
    <div className="shadow   rounded-3xl w-full">
      <img
        className="w-full

"
        src={image}
        alt=""
      />
      <div className="flex flex-col items-center">
        <p className=" lg:text-2xl text-lg font-medium pt-3 ">{title}</p>
        <Link to={`/categori/${id}`}>
          <button className="text-primary font-medium pt-1 pb-3">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Categori;
