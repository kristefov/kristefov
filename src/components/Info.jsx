/* eslint-disable no-unused-vars */
/* The code is importing the React library and the `personalInfo` variable from a file located in the
'../data' directory. */
import React from 'react'
import { personalInfo } from '../data'

/**
 * The Info component renders a list of personal information items with titles and descriptions.
 * @returns The Info component is returning a list of items. Each item is rendered as an li element
 * with a title and description. The title and description are extracted from the personalInfo array
 * using destructuring. The key prop is set to the index of each item in the array.
 */
const Info = () => {
  return (
   <>
   {personalInfo.map(({title, description }, index) => {
    return(
        <li className="info__item" key={index}>
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
        </li>
    )
   })}
   </>
  )
}

export default Info