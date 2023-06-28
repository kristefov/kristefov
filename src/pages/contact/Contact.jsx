/* eslint-disable no-unused-vars */
/* The code is importing various icons from the `react-icons` library and assigning them to variables.
These icons will be used in the Contact component to display social media icons and other graphical
elements. Additionally, the code is importing the `React` object from the `react` library, which is
necessary for creating React components. Lastly, the code is importing a CSS file named
`contact.css` which contains styles specific to the Contact component. */
import React, { useState } from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
import { validateEmail } from "../../utils/helpers";

/* The code defines a functional component called `Contact` in JavaScript React. This component
represents a contact section on a webpage. */
const Contact = () => {
  const [formState, setFromState] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [errorMessage, setErrorMesage] = useState("");

  const handleChange = () => {};

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Contact Me!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <a href="mailto:kristiyan.tefov@icloud.com">
                  <h4 className="info__desc">kristiyan.tefov@icloud.com</h4>
                </a>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <a href="tel:07306786666">
                  <h4 className="info__desc">+447306786666</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>

            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>

            <a
              href="https://www.linkedin.com/in/kristiyantefov/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="subject"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              name="message"
              className="form__control textarea"
            ></textarea>
          </div>
          <div className="errorHolder">
            <button type="submit" className="button">
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
            <p className="errorMessage">Error</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
