/* eslint-disable no-unused-vars */
/* The code is importing necessary dependencies and components for the `Portfolio` component. */
import React from 'react'
import { portfolio } from '../../data'
import PortfolioItem from '../../components/PortfolioItem'
import './portfolio.css'

/* The code defines a functional component called `Portfolio`. This component returns JSX code that
represents a section of a portfolio. */
const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">My <span>Portfolio</span></h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>

    </section>
  )
}

export default Portfolio