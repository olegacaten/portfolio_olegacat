import React, { useState } from "react";

import Linewhite from "../../components/line_white/Linewhite";
import Contact_form from "../../components/contact_form/Contact_form";
import "./footer.css";

const Footer = () => {
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

  return (
    <div className="footer section__padding" id="contact">
      <Linewhite text="3. Footer" />

      <div className="footer__title">
        <h1>Contact me</h1>
      </div>
      <div className="footer__content">
        <div className="footer__content__left-part">
          <h1>REACH ME OUT</h1>
        </div>

        <Contact_form />

        
      </div>
      <div className="footer__creator">
          <p>copyright © 2023. Oleg Makarov. All rights reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
