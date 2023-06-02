import React from "react";
import Me from "../../assets/Me.svg";
import "./header.css";
const Header = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="header section__padding">
      <div className="header__content">
        <div className="header__content__left">
          <h2 className="shadow_animation">
            Hi, I am <span>Oleg Makarov</span>
          </h2>

          <h1>a Junior front-end web developer</h1>
          <p>
            I strive to create user-friendly websites. I enjoy exploring the
            latest technologies to enhance the functionality and aesthetics of
            my projects. Join me on this showcase my skills as a web junior
            programmer.
          </p>

          <button onClick = {handleClickScroll} >Contact</button>
        </div>
      </div>
      <div className="header__content__right">
        <img src={Me} alt="Myphoto" />
      </div>
    </div>
  );
};

export default Header;
