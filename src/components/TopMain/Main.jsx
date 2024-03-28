import React from "react";
import "./main.css";

function Main(props) {
  const { value, change, addTasksFoo, foo } = props;
  return (
    <>
      <div className="mainDiv">
        <div className="container">
          <input type="checkbox" onChange={addTasksFoo} />
          <input
            value={value}
            onKeyDown={foo}
            className="typeInp"
            type="text"
            placeholder="Create a new todo…"
            onChange={(e) => change(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Main;
