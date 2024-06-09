import React from "react";

const Categori = ({ categori }) => {
  console.log(categori);
  const { title, image } = categori;
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
  <button className="text-primary font-medium pt-1 pb-3">Learn more</button>
  </div>
    </div>
  );
};

export default Categori;
