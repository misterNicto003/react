import React from "react";
import Title from "../../Title/Title";
import star from "../../../../assets/Star 4.svg"
import door from "../../../../assets/door.svg"
import lobby153 from "../../../../assets/image 153 lobby.png"
import lobby154 from "../../../../assets/image 154 lobby.png"
import lift from "../../../../assets/lift.svg"

const section6 = () => {
  return (
    <div className="section6">
      <Title className="title-56">Современная эстетика лобби</Title>
      <div className="section6-lobby1">
        <div className="section6-lobby1-title">
          <img src={door} alt="" />
          <Title  className="title-40">Центральные входные группы</Title>
        </div>
        <ul className="section6-lobby1-list">
          <li>
            <img src={star} alt="" />
            Зоны ожидания и встреч
          </li>
          <li>
            <img src={star} alt="" />
            Пост охраны
          </li>
          <li>
            <img src={star} alt="" />
            Переговорная комната
          </li>
          <li>
            <img src={star} alt="" />
            Колясочная
          </li>
        </ul>
        <div className="section6-lobby1-picture">
          <img src={lobby153} alt="" />
          <img src={lobby154} alt="" />
        </div>
      </div>

      <div className="section6-lobby2">
        <div className="section6-lobby2-title">
          <img src={lift} alt="" />
          <Title  className="title-40">Лифтовый холл</Title>
        </div>
        <ul className="section6-lobby2-list">
          <li>
            <img src={star} alt="" />
            2-4 лифта
          </li>
          <li>
            <img src={star} alt="" />
            Грузовые и пассажирские
          </li>
          <li>
            <img src={star} alt="" />
            Ведущие производители
          </li>
          
        </ul>
        <div className="section6-lobby2-picture">
          <img src={lobby154} alt="" />
          <img src={lobby153} alt="" />
        </div>
      </div>
    </div>
  );
};

export default section6;
