import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar__item">
          <Link className="Nav__link" to="/Dashboard">
            Dashboard
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="Nav__link" to="/Settings">
            Setting
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="Nav__link" to="/Animals">
            Animals
          </Link>
        </li>
        <li className="navbar__item danger" onClick={() => {}}>
          logout
        </li>
      </ul>
    </nav>
  );
}
