import React from "react";
import "./footer.scss";
import Title from "../Title/Title/Title";

import logo from "../../assets/footer/logo.svg";
import estes from "../../assets/footer/estes.svg";
import map from "../../assets/footer/map.png";

const footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-title">
          <Title className="footer-title-text">
            Жилой комплекс «West Garden» — все преимущества жизни на природе
          </Title>
          <img src={logo} alt="" />
        </div>
        <div className="footer-nav">
          <div>
            <div className="footer-nav-logo">
              <img src={estes} alt="" />
            </div>
            <div className="footer-nav-adress">
              <h4>Офис продаж</h4>
              <h3>Москва, Локал наб. 2/4, строение 17, офис 308</h3>
            </div>
            <div className="footer-nav-number">
              <h3>Телефон</h3>
              <p>+7 495 845 19 34</p>
              <li>работаем</li>
            </div>
          </div>
          <div className="footer-img">
            <img src={map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
