import React from 'react'
import Info from '../../components/Info'
import Stats from '../../components/Stats'
import { FaDownload } from 'react-icons/fa'
import CV from '../../assets/CV Kristiyan Tefov.pdf'

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">About <span>Me</span></h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download='' className="button">
              Download CV<span className="button__icon"><FaDownload /></span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About