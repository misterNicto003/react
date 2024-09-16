import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import mock from "../../../../mock.json";

const Section3 = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' +  mock[index].title + "</span>";
    },
    
  };
  return (
    <div className="section3">
      <Swiper
        pagination={pagination}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        spaceBetween={20}
        scrollbar={{ draggable: true }}
      >
        {mock.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section3;
