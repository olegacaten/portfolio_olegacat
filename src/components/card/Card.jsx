import React from "react";
import "./card.css";

const heroes = ["Superman", "Batman", "Wonder Woman"];

function Card({ title, imageUrl, body, btn_name, btn_link, tools }) {
  const tool_name = tools.map((child, index) => (
    <span key={index}> {child} </span>
  ));
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__image">
          <img src={imageUrl} alt="image_portfolio" />
        </div>
        <div className="card__title">{title}</div>
        <div className="card__body">{body}</div>
        <div className="card__tools shadow_animation">
          {tool_name} 
        </div>
      <div className="card__button">
      <a href={btn_link} target="_blank" className="btn_link">Demo</a>
      </div>
        
      </div>
    </div>
  );
}

export default Card;
