"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { HiXCircle } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-flex">
        <div className="navbar-logo">nick-Faizee</div>
        <ul className={`navbar-menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <li className="menulink"><a href="#hero">HOME</a></li>
          <li className="menulink"><a href="#about">ABOUT</a></li>
          <li className="menulink"><a href="#projects">PROJECTS</a></li>
          <li className="menulink"><a href="#skills">SKILLS</a></li>
          <li className="menulink"><a href="#contact">CONTACT</a></li>
        </ul>
        {isMenuOpen ? (
          <HiXCircle className="menu-icon" size={30} onClick={toggleMenu} />
        ) : (
          <AiOutlineMenu className="menu-icon" size={30} onClick={toggleMenu} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
