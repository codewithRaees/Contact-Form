import React, { useState } from "react";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import SigninModal from "./ModalPopup/SigninModal";

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center shadow-sm px-10">
      <img src={logo} alt="Logo" className="h-12" />
      <ul className="flex gap-10 px-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="coveredconcept">Covered Concept</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <span
          onClick={() => setisOpen(true)}
          className="hover:text-blue-400 cursor-pointer"
        >
          Signup
          <SigninModal isOpen={isOpen} setisOpen={setisOpen} />
        </span>
      </ul>
    </nav>
  );
};

export default NavBar;
