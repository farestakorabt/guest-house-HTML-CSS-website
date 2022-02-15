import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
        
      <ul>
        <NavLink to="/" className="hover" activenclassname="nav-active">
          <li>Accueil</li>
        </NavLink>
        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/project1"
              activenclassname="nav-active"
              className="hover"
            >
              <li>Projet 1</li>
            </NavLink>
            <NavLink
              to="/project2"
              activenclassname="nav-active"
              className="hover"
            >
              <li>Projet 2</li>
            </NavLink>
            <NavLink
              to="/project3"
              activenclassname="nav-active"
              className="hover"
            >
              <li>Projet 3</li>
            </NavLink>
            <NavLink
              to="/project4"
              activenclassname="nav-active"
              className="hover"
            >
              <li>Projet 4</li>
            </NavLink>
          </ul>
        </li>
        <NavLink to="/contact" className="hover" activeclassname="nav-active">
          Contact
        </NavLink>

      </ul>
    </div>
  );
};

export default Navigation;
