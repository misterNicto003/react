import React from "react";
import Title from "../../Title/Title";

import imgS7 from "../../../../assets/img section7.png";
import vector from "../../../../assets/vector a.svg";

const Section7 = () => {
  return (
    <div className="container">
      <div className="section7">
        <Title className="section7-title">
          Более 100 свободных квартир редких форматов
        </Title>

        <div className="section7-card">
          <div className="section7-card-title">
            <Title>
              Свободная планировка, возможность объединить квартиры до 500 м²
            </Title>
            <p>
              Не ограничивайте себя при создании жилого пространства Вашей
              мечты, воспользуйтесь возможностью увеличения площади до
              комфортного Вам размера
            </p>
            <a href="">
              Узнать стоимость <img src={vector} alt="" />
            </a>
          </div>
          <div className="section7-card-img">
            <img src={imgS7} alt="" />
          </div>
        </div>
        <div className="section7-card">
          <div className="section7-card-title">
            <Title>Собственная терраса до 17 м²</Title>
            <p>
              Современная террасса с необыкновенными видами на благоустроенную
              набережную, МГУ им. М.В. Ломоносова и Воробьевы горы
            </p>
            <a href="">
              Узнать стоимость <img src={vector} alt="" />
            </a>
          </div>
          <div className="section7-card-img">
            <img src={imgS7} alt="" />
          </div>
        </div>
        <div className="section7-card">
          <div className="section7-card-title">
            <Title>Увеличенная высота потолка </Title>
            <p>
              Почувствуйте простор помещений в полной мере с увеличенной высотой
              потолка 4,2 м
            </p>
            <a href="">
              Узнать стоимость <img src={vector} alt="" />
            </a>
          </div>
          <div className="section7-card-img">
            <img src={imgS7} alt="" />
          </div>
        </div>
        <div className="section7-card">
          <div className="section7-card-title">
              <Title>Настоящий дровяной камин </Title>
              <p>
                В пентхаусах предусмотрен дымоход с возможностью установки
                камина, чтобы Вы получали наслаждение от живого тепла в холодное
                время годаs
              </p>
              <a href="">
                Узнать стоимость <img src={vector} alt="" />
              </a>
          </div>
          <div className="section7-card-img">
            <img src={imgS7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
