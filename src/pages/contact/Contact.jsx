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
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";
import { validateEmail } from "../../utils/helpers";

/* The code defines a functional component called `Contact` in JavaScript React. This component
represents a contact section on a webpage. */
const Contact = () => {
 /* The code is using the `useState` hook from React to create a state variable called `formState` and
 a function called `setFromState` to update the state. The initial value of `formState` is an object
 with properties `name`, `email`, `message`, and `subject`, all initialized with empty strings. This
 state is used to store the values entered by the user in the contact form. */
  const [formState, setFromState] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  /* The code is using the `useState` hook from React to create a state variable called `errorMessage`
  and a function called `setErrorMessage` to update the state. The initial value of `errorMessage`
  is an empty string. This state is used to store and display any error messages related to the
  contact form. */
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message, subject} = formState;

 /**
  * The handleChange function is used to handle changes in an input field, validate the email address,
  * and update the form state accordingly.
  */
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email address");
        setTimeout(() => {
          console.log(setTimeout)
          setErrorMessage("")
        }, 5000);
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required `);
          setTimeout(() => {
            console.log(setTimeout)
            setErrorMessage("")
          }, 5000);
        } else {
          setErrorMessage("");
        }
      }
    }
    if (!errorMessage) {
      setFromState({ ...formState, [e.target.name]: e.target.value });
    }
  };

 /**
  * The function `handleBlank` checks if certain input fields are blank and sets an error message if
  * they are, otherwise it updates the form state.
  */
  const handleBlank = (e) => {
    if (
      e.target.name === "Name" ||
      e.target.name === "Subject" ||
      e.target.name === "Message"
    ) {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
        setTimeout(() => {
          console.log(setTimeout)
          setErrorMessage("")
        }, 5000);
      } else {
        setErrorMessage("");
      }
    } if(!errorMessage) {
      setFromState({...formState, [e.target.name]: e.target.value});
    }
  }

/**
 * The handleSubmit function sets an error message and then clears it after a delay of 5 seconds.
 */
  const handleSubmit = () => {
    setErrorMessage("In development mode for contact please use the email provided instead");
   setTimeout(() => {
    console.log(setTimeout)
    setErrorMessage("")
  }, 5000);
  }


  

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
            <a href="https://github.com/kristiyantefov" className="contact__social-link">
              <FaGithub />
            </a>
            <a href="https://twitter.com/fakekrisko" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/CyberCubeTV" className="contact__social-link">
              <FaYoutube/>
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
                name="Name"
                defaultValue={name}
                onBlur={handleBlank}
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
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="Subject"
                defaultValue={subject}
                onBlur={handleBlank}
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              name="Message"
              className="form__control textarea"
              defaultValue={message}
                onBlur={handleBlank}
            ></textarea>
          </div>
          
            <span  className="button" onClick={handleSubmit}>
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </span>
            <div className="errorHolder">
            { errorMessage && (<p className="errorMessage">{errorMessage}</p>)}
           
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
