//rafce

import React from 'react';
import './contact_form.css';
const Contact_form = () => {
  return (
    <div className="footer__content__right-part">
    <div className="footer__content__right-part__input">
      <input
        type="input"
        class="form__field"
        placeholder="Name"
        name="name"
        id="name"
        required
      />
      <input
        type="input"
        class="form__field"
        placeholder="Email"
        name="email"
        id="email"
        required
      />
      <textarea
        type="text-area"
        class="form__field message"
        placeholder="Your message"
        name="message"
        id="message"
        required
      ></textarea>

      <div className="btn_send">
        <button>Send</button>
      </div>
    </div>
  </div>
  )
}

export default Contact_form