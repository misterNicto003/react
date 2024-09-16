import React from "react";
import Title from "../../Title/Title";
import map from "../../../../assets/Map (1).png";
import panoramaImg from "../../../../assets/panorama.svg";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2-heading">
        <div></div>
          <h2>Престижное расположение</h2>
        <div></div>
      </div>
      <Title className="section2-title">
        Один из самых зелёных районов столицы — Раменки
      </Title>
      <img src={map} alt="" />
      <p>
        ЖК West Garden окружен Матвеевским лесом, набережной реки Раменки
        и природным заказником «Долина реки Сетунь»
      </p>
      <div className="section2-btn"> <img src={panoramaImg} alt="" />Панорама района 360˚</div>
    </div>
  );
};

export default Section2;
