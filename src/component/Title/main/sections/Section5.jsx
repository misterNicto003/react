import React from "react";
import Title from "../../Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import mock from "../../../../mock.json";
import ponorama from "../../../../assets/Vector.svg"
import parkLine from "../../../../assets/parkLine.svg"



const Section5 = () => {
 
    
  
  return (
    <div className="section5">
      <Title className="section5-title ">
        Жилой комплекс состоит из двух кластеров
      </Title>

      <div className="section5-top">

        <div className="section5-top-swiperApp">
          <div className="section5-top-swiperApp-title">
            <Title className="titleWhite-56">River Line <img src={ponorama} alt="" /></Title>
          </div>
          <div className="section5-top-swiperApp-prf">
            <p>
              Восемь жилых корпусов по 12-14 этажей выстроенны вдоль реки
              Раменки
            </p>
            <button>Посмотреть планировки</button>
          </div>
        </div>

        <Swiper className="swiperS5" 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={2}
        navigation
        spaceBetween={550}
        scrollbar={{ draggable: true }}
      >
        {mock.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      

      <div className="section5-bottom">

 <div className="section5-bottom-swiperBottom">
          <div className="section5-bottom-swiperBottom-title">
            <Title className="titleWhite-56">Park Line <img src={parkLine} alt="" /></Title>
          </div>
          <div className="section5-bottom-swiperBottom-prf">
            <p>
            Семь 14-этажных жилых корпусов,  расположенных вдоль Матвеевского леса
            </p>
            <button>Посмотреть планировки</button>
          </div>
        </div>

        <Swiper className="swiperS5"  
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={2}
        navigation
        spaceBetween={550}
        scrollbar={{ draggable: true }}
      >
        {mock.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Section5;
