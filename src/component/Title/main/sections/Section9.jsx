import React from "react";
import Title from "../../Title/Title";

import book from "../../../../assets/section9/Rectangle.png";
import room from "../../../../assets/section9/image 210.png";
import shop from "../../../../assets/section9/image 211.png";
import interest from "../../../../assets/section9/interest.png";

const Section9 = () => {
  return (
    <div className="container">
      <div className="section9">
        <div className="section9-title">
          <Title className="section9-title-text">Отделка от застройщика</Title>
          <p>
            Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой
          </p>
        </div>
        <div className="section9-cardContainer">
          <div className="section9-cardContainer-card">
            <div className="section9-cardContainer-card-img">
              <img src={book} alt="" />
            </div>
            <div className="section9-cardContainer-card-title">
              <Title className="section9-cardContainer-card-title-text">
                Готовый дизайн-проект
              </Title>
              <p>
                Воспользуйтесь возможностью сразу же заняться меблировкой и
                благоустройством новой квартиры, как только получите ключи
              </p>
            </div>
          </div>
          <div className="section9-cardContainer-card">
            <div className="section9-cardContainer-card-img">
              <img src={room} alt="" />
            </div>
            <div className="section9-cardContainer-card-title">
              <Title className="section9-cardContainer-card-title-text">
                Чистота и тишина, без шума и пыли
              </Title>
              <p>
                Забудьте шум от «бесконечного ремонта» соседей и лифт,
                декорированный защитными материалами{" "}
              </p>
            </div>
          </div>
          <div className="section9-cardContainer-card">
            <div className="section9-cardContainer-card-img">
              <img
                className="section9-cardContainer-card-img-shop"
                src={shop}
                alt=""
              />

              <div className="section9-cardContainer-card-img-interest">
                <img
                  className="section9-cardContainer-card-img-interest-img"
                  src={interest}
                  alt=""
                />
              </div>
            </div>
            <div className="section9-cardContainer-card-title">
              <Title className="section9-cardContainer-card-title-text">
                Выгода за счет оптовых закупок
              </Title>
              <p>
                Благодаря оптовым закупкам застройщика, вы получаете возможность
                сэкономить на стоимости ремонта
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
