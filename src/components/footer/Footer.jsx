/* eslint-disable no-unused-vars */
import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
    FaGithub
  } from "react-icons/fa";

/* The code is defining a functional component called `Footer`. This component returns JSX code that
represents the footer section of a website. */
const Footer = () => {
  return (
    <footer className="footer">
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
        className="contact__social-link"> <FaLinkedin />
      </a>
      <a
        href="https://github.com/kristiyantefov"
        className="contact__social-link"> <FaGithub />
      </a>

    </div>
    </footer>
    
  );
};

export default Footer;
