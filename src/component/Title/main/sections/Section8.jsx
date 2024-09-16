import React from "react";
import Title from "../../Title/Title";
import { polygon1, polygon10, polygon2, polygon3, polygon4, polygon5, polygon6, polygon7, polygon8, polygon9 } from "../../../../assets/section8";


const Section8 = () => {
  return (
    <div className="container">
  <div className="section8">
      <div className="section8-title">

        <Title className="section8-title-48">Какая квартира подойдет именно вам?</Title>
        <p>
          Ответьте на 4 вопроса, чтобы подобрать идеальный вариант недвижимости
        </p>
        <button>Пройти тест</button>
      </div>
      <div className="section8-img">

        <img src={polygon3} alt="" />
        <img src={polygon7} alt="" />
        <img src={polygon8} alt="" />
        <img src={polygon5} alt="" />
        <img src={polygon2} alt="" />
        <img src={polygon1} alt="" />
        <img src={polygon10} alt="" />
        <img src={polygon9} alt="" />
        <img src={polygon6} alt="" />
        <img src={polygon4} alt="" />
      </div>
    </div>
    </div>
  
  );
};

export default Section8;
