import React from "react";
import { themes } from "../data";
import ThemesItem from "./ThemesItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./themes.css";

const Themes = () => {
  return (
    <div>
      <div className="style__switcher">
        <div className="style__switcher-toggler">
          <FaCog />
        </div>

        <div className="theme__toggler">
            <BsMoon />
        </div>

        <h3 className="style__switcher-title">Style Switcher</h3>
<div className="style__switcher-items">
    {themes.map((theme, index) => {
        return (
            <ThemeItem key={index} {...theme}/>
        )
    })}
</div>
      </div>
    </div>
  );
};

export default Themes;
