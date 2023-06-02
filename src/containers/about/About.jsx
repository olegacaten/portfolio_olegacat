import React from "react";

import "./about.css";
import Linewhite from "../../components/line_white/Linewhite";
const About = () => {
  return (
    <div className="about section__padding" id="about">
      <Linewhite text="1. About" />
      <div className="about__title">
      <h1>Information section</h1>
      <p>A little more about me</p>
      </div>
      <div className="about__content">
        <div className="about__content__left">
        <h1>Hi!</h1>
        <p>I am passionate about technology, I specialize in building dynamic
           user interfaces with React. From crafting engaging
            designs to collaborating effectively, I aim to make a
             meaningful impact in the digital realm. Explore my portfolio 
             to see my work and let's connect!
        </p>
        </div>
        <div className="about__content__right">
        <h1>Skills</h1>
          <div className="about__content__right__skills shadow_animation_black">
          <span>React</span> <span>JavaScript</span> <span>HTML</span>
          <span>Git</span> <span>PHP</span> <span>MySQL</span>
          <span>Bootstrap</span> <span>WordPress</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
