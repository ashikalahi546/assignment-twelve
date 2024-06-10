// import image1 from "/image/carousel3.png";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { IoEyeOutline } from "react-icons/io5";
import DiscountProduct from "../DiscountProduct";
import Modal3 from "../../component/Modal/Modal3";
import { Link } from "react-router-dom";

const Shop = () => {
  const [rating, setRating] = useState(0);
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setDiscounts(data));
  }, []);

  const [item, setItem] = useState([]);
  const [open, setOpen] = useState(false);
  const handleModal2 = (item) => {
    setOpen(true);
    // console.log(item)
    setItem(item);
  };
  const close = () => {
    setOpen(false);
  };

  return (
    <div className="mt-5">
      <div>
        <div className="text-center mt-16">
          <h1 className="lg:text-4xl text-2xl font-medium">Our Products</h1>
          <p className="pt-4">
            Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt
            laoreet ex, in pretium orci vestibulum eget. Class aptent{" "}
            <span className="lg:block">
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos..
            </span>
          </p>
        </div>
        <div className=" mt-10 grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 gap-8">
          {discounts.map((item, index) => (
            <div key={index} className="shadow border rounded-3xl ">
              <img className="w-full h-80" src={item["image"]} alt="" />
              <div className="px-3 pt-4 pb-7">
                <span>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={item["star"]}
                    onChange={setRating}
                  />
                </span>

                <h2 className="md:text-2xl text-xl font-medium pt-1">
                  {item["title"]}
                </h2>

                <p className="md:text-xl text-base font-semibold pt-2">
                  ${item["price"]}.00
                </p>
                <div className="flex items-center  mt-4 gap-7">
                <Link >
                <button className="bg-[#0379B8] hover:bg-white hover:border-[#0379B8] border w-24 h-9 text-white hover:text-[#0379B8] font-medium rounded duration-150 delay-100">
                    Select
                  </button>
                </Link>
                  <button onClick={()=>handleModal2(item)} className="border-[#0379B8] hover:bg-[#0379B8] border w-24 h-9 text-[#0379B8] hover:text-white font-medium text-xl rounded  flex items-center justify-center duration-150 delay-100">
                    <IoEyeOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {
            open && <Modal3 item={item} close={close}/>
          }
        </div>
      </div>
      <DiscountProduct />
    </div>
  );
};

export default Shop;
