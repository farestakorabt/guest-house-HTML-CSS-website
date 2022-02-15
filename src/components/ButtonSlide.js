import React from "react";
import { NavLink } from "react-router-dom";

function ButtonSlide(props) {
    // console.log(props);
  return (
    <div className="scroll-bottom">
      <div className="sb-main">
        {props.left && (
          <NavLink to={props.left} className="left hover">
            <span>&#10092;</span>
          </NavLink>
        )}

        {props.right && (
          <NavLink to={props.right} className="right hover">
            <span>&#10093;</span>
          </NavLink>
        )}
        <p className="center">scroll</p>

      </div>
    </div>
  );
}

export default ButtonSlide;
