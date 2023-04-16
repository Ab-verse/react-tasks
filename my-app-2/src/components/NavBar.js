import React from "react";
import "./style.css";

import Logo from "../assets/airbnbLogo.png";

const NavBar = () => {
  return (
    <nav>
      <img src={Logo} alt="AirBnb Logo" className="nav--logo" />
    </nav>
  );
};

export default NavBar;
