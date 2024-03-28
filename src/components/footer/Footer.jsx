import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <>
        <div className="FmainDiv">
            <div className="content">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
        </div>
    </>
  )
}

export default Footer