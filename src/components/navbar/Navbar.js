import React from "react";
import "./Navbar.css";
export default function navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar__item">DashBoard</li>
        <li className="navbar__item">Settings</li>
        <li className="navbar__item">Logout</li>
      </ul>
    </nav>
  );
}
