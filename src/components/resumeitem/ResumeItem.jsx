/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* The code is importing the `React` library from the 'react' package and the `parse` function from the
'html-react-parser' package. */
import React from 'react'
import parse from 'html-react-parser'

/**
 * The ResumeItem function is a React component that renders a resume item with an icon, year, title,
 * and description.
 * @returns The `ResumeItem` component is returning a JSX element.
 */
const ResumeItem = ({icon, year, title, desc}) => {
  return (
    <div className="resume__item">
        <div className="resume__icon">{icon}</div>
        <span className="resume__date">{year}</span>
        <h3 className="resume__subtitle">{parse(title)}</h3>
        <p className="resume__description">{desc}</p>
    </div>
  )
}

export default ResumeItem