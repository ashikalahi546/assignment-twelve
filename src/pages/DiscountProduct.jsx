// import image1 from "/image/carousel3.png";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Modal2 from "../component/Modal/Modal2";

const DiscountProduct = () => {
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
    <div className="">
      <div className="text-center mt-16">
        <h1 className="lg:text-4xl text-2xl font-medium">
          Discounted Products
        </h1>
        <p className="pt-4">
          Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt
          laoreet ex, in pretium orci vestibulum eget. Class aptent{" "}
          <span className="lg:block">
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos..
          </span>
        </p>
      </div>
      <div className=" mt-10 ">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            1280: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
          }}
          navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {discounts.map((item, index) => (
            <SwiperSlide
              onClick={() => handleModal2(item)}
              className="cursor-pointer"
              key={index}
            >
              <div className="shadow border rounded-3xl relative  ">
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
                  <div className="flex pt-3 gap-5">
                    <p className="md:text-xl text-base font-semibold text-[#393939]">
                      ${item["price"]}.00
                    </p>
                    <div className="flex justify-between w-full pt-1">
                      <p className="md:text-xl text-base font-semibold text-[#FF2E21] line-through">
                        ${item["price"]}.00
                      </p>

                      <button className="bg-[#0379B8] w-24 h-9 text-white font-medium rounded">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {open && <Modal2 item={item} close={close} />}
        </Swiper>
      </div>
    </div>
  );
};

export default DiscountProduct;
