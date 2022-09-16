import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Box from "./Box";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

const App = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="container">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          // Both prevEl & nextEl are null at render so this does not work
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box index="One" />
        </SwiperSlide>
        <SwiperSlide>
          <Box index="Two" />
        </SwiperSlide>
        <SwiperSlide>
          <Box index="Three" />
        </SwiperSlide>
        <SwiperSlide>
          <Box index="Four" />
        </SwiperSlide>
        <SwiperSlide>
          <Box index="Five" />
        </SwiperSlide>
        <SwiperSlide>
          <Box index="Six" />
        </SwiperSlide>
        <div ref={navigationPrevRef} className="nav-control left" >&lt;</div>
        <div ref={navigationNextRef} className="nav-control right" >&gt;</div>
      </Swiper>
    </div>
  );
};
export default App;
