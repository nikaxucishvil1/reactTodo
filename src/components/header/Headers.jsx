import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

function Header() {
  return (
    <div className="mainDivHeader">
      <img src="./src/img/header.img/logo.svg" alt="" />
      <button className="DarkModeBtn">
        <FontAwesomeIcon icon={faMoon} className="icon" />
      </button>
    </div>
  );
}

export default Header;
