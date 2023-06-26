import React from 'react'
import { skills } from '../data' 

const Skils = () => {
  return (
    <>
    {skills.map(({title, percentage}, index) => {
      return (
        <div className="progress__box" key={index}>
          <div className="progress__circle"></div>
        </div>
      )
    })}
    </>
  )
}

export default Skils