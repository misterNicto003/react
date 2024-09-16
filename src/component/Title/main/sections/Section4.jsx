import React from "react";

import Title from "../../Title/Title";
import { useMask } from "@react-input/mask";
import arrow from "../../../../assets/→.svg";
import foto from "../../../../assets/Слой 1 1.png";
const Section4 = () => {
  const inputRef = useMask({
    mask: "+7  (___) ___-__-__",
    replacement: { _: /\d/ },
  });
  return (
    <div className="section4">
      <div className="section4-card">
        <div className="section4-card-info">
          <h3 className="section4-card-info-title">СПЕЦИАЛЬНО ДЛЯ ВАС</h3>
          <Title className="title48">
            Персональная презентация West Garden
          </Title>
          <ul className="section4-card-info-list">
            <li className="section4-card-info-list-li">
              <img
                className="section4-card-info-list-li-img"
                src={arrow}
                alt=""
              />
              Подробно расскажем про жилой комплекс{" "}
            </li>
            <li className="section4-card-info-list-li">
              <img
                className="section4-card-info-list-li-img"
                src={arrow}
                alt=""
              />
              Подробно расскажем про жилой комплекс{" "}
            </li>
            <li className="section4-card-info-list-li">
              <img
                className="section4-card-info-list-li-img"
                src={arrow}
                alt=""
              />
              Подробно расскажем про жилой комплекс{" "}
            </li>
          </ul>
        </div>

        <div className="section4-card-number">
          <h4 className="section4-card-number-title">Закрепить за номером</h4>
          <div className="section4-card-number-phone">
            <input
              className="section4-card-number-phone-input"
              ref={inputRef}
            />
            <button className="section4-card-number-phone-btn">
              Записаться на презентацию
            </button>
          </div>
          <p className="section4-card-number-phone-prf">
            Нажимая на кнопку, вы даёте согласие на обработку персональных
            данных и соглашаетесь c <span>политикой конфиденциальности </span> 
          </p>
        </div>
      </div>
      <div className="section4-foto">
        <img className="section4-foto-img" src={foto} alt="" />
        <div className="section4-foto-blog">
          <h4 className="section4-foto-blog-title">Алёна Кирющенко</h4>
          <p className="section4-foto-blog-prf">
            ведущий эксперт по недвижимости в ESTES
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
