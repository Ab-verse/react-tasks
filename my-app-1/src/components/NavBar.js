import React from "react";
import Logo from "../assets/logo192.png";
import "./style.css";

export default function NavBar() {
  return (
    <nav>
      <img src={Logo} alt="ReactLogo" className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>

      <h4 className="nav--title">React Course-Project 1</h4>
    </nav>
  );
}
