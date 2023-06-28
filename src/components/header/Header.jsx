/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineFundProjectionScreen
  } from "react-icons/Ai";
  

/* The code is defining a functional component called `Footer`. This component returns JSX code that
represents the footer section of a website. */
const Footer = () => {
  return (
    <header className="header">
        <p>Latest Project</p>
        <div className="contact__socials">   
      <a
        href="https://mylittlewebshop.herokuapp.com/login"
        className="contact__social-link"> <AiOutlineFundProjectionScreen />
      </a>

    </div>
    </header>
    
  );
};

export default Footer;
