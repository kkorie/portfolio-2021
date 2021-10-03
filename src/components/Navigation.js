import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
      <ul>
        <li class="about">
          <NavLink to="/" exact>About Me</NavLink>
        </li>
        <li class="project">
          <NavLink to="/project">Project</NavLink>
        </li>
        <li class="contact">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;