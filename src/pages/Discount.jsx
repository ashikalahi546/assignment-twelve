import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Discount = ({ discount }) => {
  console.log(discount);
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
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
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Discount;
