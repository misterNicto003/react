import React from "react";
import "./header.scss";

import logo from "../../assets/Лого 1.svg";
import westGarden from "../../assets/westGarde.svg";
import imgHeader from "../../assets/img.png";
import avardImg from "../../assets/award.svg";
import Title from "../Title/Title/Title";

const Header = () => {
  return (
    <header className="header">
      <div className="header-nav">
        <div className="header-nav-logo">
          <img src={logo} alt="" />
          <p>
            Официальный партнер
            <span> АО «КККК»</span>
          </p>
        </div>
        <div className="header-nav-number">
          <p>+7 495 845 19 34</p>
          <li>работаем</li>
        </div>
      </div>
      <div className="header-title">
        <img className="header-title-img" src={westGarden} alt="" />
        <Title className="title64">
          Жизнь в зеленом оазисе в статусном районе Москвы
        </Title>
        <p>Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
      </div>
      <div className="header-logo">
        <img className="header-logo-img" src={imgHeader} alt="" />

        <div className="header-logo-premy">
          <img src={avardImg} alt="" />
          <p>Победитель федеральнойпремии UrbanAwards 2019</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
