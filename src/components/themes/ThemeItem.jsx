/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* This code is defining a React functional component called `ThemesItem`. */
import React from 'react'

const ThemesItem = ({color, img, changeColor}) => {
  return <img src={img} alt="" className="theme__img" onClick={() => {changeColor(color)}}/>
}

export default ThemesItem