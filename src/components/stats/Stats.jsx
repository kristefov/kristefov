/* eslint-disable no-unused-vars */
/* The code is importing the necessary dependencies for the `Stats` component. */
import parse from "html-react-parser";
import React from "react";
import { stats } from "../../data";

/**
 * The Stats component in JavaScript React renders a list of stats with their corresponding numbers and
 * titles.
 * @returns The `Stats` component is returning a fragment (`<>...</>`) containing multiple `div`
 * elements. Each `div` element represents a stat and contains an `h3` element displaying the stat
 * number (`no`) and a `p` element displaying the stat title (`title`). The `stats` array is being
 * mapped over to generate these `div` elements.
 */
const Stats = () => {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div className="stats__box" key={index}>
            <h3 className="stats__no">{no}</h3>
            <p className="stats__title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default Stats;
