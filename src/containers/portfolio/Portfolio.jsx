import React from "react";
import Card from "../../components/card/Card";
import Line from "../../components/line/Line";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio section__padding" id="portfolio">
      <Line text = "2. Portfolio" />
      <div className="portfolio__content">
        <Card
          title="AMAgroup24"
          imageUrl={require('../../assets/portfolio_image.png')} 
          body="Landing page for a client. Site about the 
          advertising agency of the full cycle. Messages are sent
           directly to Telegram. "
           tools = {["JavaScript","PHP"]}
           btn_link='https://amagroup24.ru/'
        />

                <Card
          title="Clock - timer"
          imageUrl={require('../../assets/portfolio_image_timer.png')} 
          body="This app counts how much money people earned per a second
          in real time"
          tools = {["JavaScript","PHP"]}
          btn_link='http://olegacat.ru/timer/'
        />

      </div>
    </div>
  );
};

export default Portfolio;
