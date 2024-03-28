import React from "react";

import "./maintasks.css";

function Maintasks(props) {
  const {value,deleteFoo} = props

  return (
    <>
      <div className="centerDiv">
        <div className="contentDiv">
          <div className="fixDiv">
            <input type="checkbox" />
              <p className="task">{value}</p>
          </div>
          <button onClick={deleteFoo}>X</button>
        </div>
      </div>
    </>
  );
}

export default Maintasks;
