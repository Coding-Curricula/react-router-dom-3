import React from "react";
import { Link } from "react-router-dom";

import './Navigation.css'

export default function Navigation() {
  return (
    <div className="navigation-container">
      <nav>
        <h2 className="logo">
          <Link to="/">Home</Link>
        </h2>

        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
