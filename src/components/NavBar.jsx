import React from "react";
import logo from "/images/logo.png";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center shadow-sm px-10 py-2">
      <img src={logo} alt="Logo" className="h-12" />
      <ul className="flex gap-10 px-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
