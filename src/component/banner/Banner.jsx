// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="mt-20">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('/image/carousel1.png')] lg:h-[502px] sm:h-96 h-52 bg-cover bg-center rounded-3xl ">
            <div className="bg-[url('/image/blur.png')]  lg:h-[502px] sm:h-96 h-52 bg-cover bg-center rounded-3xl ">
              <div className="lg:pt-[142px] sm:pt-32 pt-10 pl-14 ">
                <h1 className="text-white lg:text-5xl text-3xl font-semibold lg:leading-[60px] leading-10 ">
                  Order Your{" "}
                  <span className="block">
                    <TypeAnimation
                      sequence={[
                        "Medicine Smartly",
                        1000,
                        " Medicine Smartly",
                        1000,
                      ]}
                      speed={200}
                      repeat={Infinity}
                    />{" "}
                  </span>
                </h1>
                <div className="w-24  pt-7">
                  <Link to="/register">
                    <button className="bg-primary px-5 py-2 w-full  text-white  md:text-sm text-xs  font-medium rounded-lg ">
                      Join Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/image/carousel2.png')] lg:h-[502px] sm:h-96 bg-cover h-52 bg-center rounded-3xl">
            <div className="bg-[url('/image/blur.png')]  lg:h-[502px] sm:h-96 h-52 bg-cover bg-center rounded-3xl">
              <div className="lg:pt-[142px] sm:pt-32 pt-10 pl-14">
                <h1 className="text-white lg:text-5xl text-3xl font-semibold lg:leading-[60px] leading-10 ">
                  Order Your{" "}
                  <span className="block">
                    <TypeAnimation
                      sequence={[
                        "Medicine Smartly",
                        1000,
                        " Medicine Smartly",
                        1000,
                      ]}
                      speed={200}
                      repeat={Infinity}
                    />{" "}
                  </span>
                </h1>
                <div className="w-24  pt-7">
                  <Link to="/register">
                    <button className="bg-primary px-5 py-2 w-full  text-white  md:text-sm text-xs  font-medium rounded-lg ">
                      Join Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/image/carousel3.png')] lg:h-[502px] sm:h-96 bg-cover h-52 bg-center rounded-3xl">
            <div className="bg-[url('/image/blur.png')]  lg:h-[502px] sm:h-96 h-52 bg-cover bg-center rounded-3xl">
              <div className="lg:pt-[142px] sm:pt-32 pt-10 pl-14">
                <h1 className="text-white lg:text-5xl text-3xl font-semibold lg:leading-[60px] leading-10 ">
                  Order Your{" "}
                  <span className="block">
                    <TypeAnimation
                      sequence={[
                        "Medicine Smartly",
                        1000,
                        " Medicine Smartly",
                        1000,
                      ]}
                      speed={200}
                      repeat={Infinity}
                    />{" "}
                  </span>
                </h1>
                <div className="w-24  pt-7">
                  <Link to="/register">
                    <button className="bg-primary px-5 py-2 w-full  text-white  md:text-sm text-xs  font-medium rounded-lg ">
                      Join Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
