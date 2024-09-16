import React from "react";
import Title from "../../Title/Title";
import hallroom from "../../../../assets/section10/Light_1.png";
import combinationOfShadows from "../../../../assets/section10/Light_2.png";
import bathroom from "../../../../assets/section10/Light_3.png";
import bedroom from "../../../../assets/section10/Description.png";

const Section10 = () => {
  return (
    <div className="container">
      <div className="section10">
        <Title className="section10-title">2 варианта отделки</Title>
        <div className="section10-cardContainer">
          <div className="section10-cardContainer-title">
            <Title>Светлая отделка</Title>
            <button>Скачать дизайн-буклет</button>
          </div>
          <div className="section10-cardContainer-pictery">
            <div>
              <img
                className="section10-cardContainer-pictery-one"
                src={hallroom}
                alt=""
              />
              <img
                className="section10-cardContainer-pictery-two"
                src={bedroom}
                alt=""
              />
            </div>
            <div>
              <img
                className="section10-cardContainer-pictery-three"
                src={combinationOfShadows}
                alt=""
              />
              <img
                className="section10-cardContainer-pictery-four"
                src={bathroom}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="section10-cardContainer">
          <div className="section10-cardContainer-title">
            <Title>Тёмная отделка</Title>
            <button>Скачать дизайн-буклет</button>
          </div>
          <div className="section10-cardContainer-pictery">
            <div>
              <img
                className="section10-cardContainer-pictery-one"
                src={hallroom}
                alt=""
              />
              <img
                className="section10-cardContainer-pictery-two"
                src={bedroom}
                alt=""
              />
            </div>
            <div>
              <img
                className="section10-cardContainer-pictery-three"
                src={combinationOfShadows}
                alt=""
              />
              <img
                className="section10-cardContainer-pictery-four"
                src={bathroom}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section10;
