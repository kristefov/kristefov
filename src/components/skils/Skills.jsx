/* eslint-disable no-unused-vars */
/* The code is importing necessary dependencies and components for the Skils component. */
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { skills } from "../../data";

/**
 * The Skils component renders a list of skills with their corresponding progress bars and titles.
 * @returns The Skils component is returning a list of progress bars with corresponding titles. Each
 * progress bar displays a percentage value and has a circular shape.
 */
const Skils = () => {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              <CircularProgressbar
                strokeWidth={7.5}
                text={`${percentage}%`}
                value={percentage}
              />
            </div>
            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skils;
