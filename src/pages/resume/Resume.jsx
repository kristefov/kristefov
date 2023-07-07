/* eslint-disable no-unused-vars */
/* The code you provided is importing various components, icons, and data that are needed in the
`About` component. */
import React from "react";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/CV Kristiyan Tefov.pdf"
import Info from "../../components/info/Info";
import ResumeItem from "../../components/resumeitem/ResumeItem";
import Skills from "../../components/skils/Skills";
import Stats from "../../components/stats/Stats";
import { resume } from "../../data";
import "./resume.css";

/* The code you provided is a functional component in JavaScript React. It defines a component called
"About" that renders a section containing information about a person's resume, skills, and
experience/education. */
const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          Resu<span>Me</span>
        </h2>
        <h3 className="section__subtitle">Personal Infos</h3>
        <div className="about__container grid">
          <div className="about__info">
            
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download="" className="button">
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skils</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>
      <div className="separator"></div>
      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Experience & Education
        </h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === 'experience') {
                return <ResumeItem key={val.id} {...val}/>
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === 'education') {
                return <ResumeItem key={val.id} {...val}/>
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
