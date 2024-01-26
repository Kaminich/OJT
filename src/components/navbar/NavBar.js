import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, } from "./NavbarElements.js";
import "./NavBar.css";
import { Link } from "react-router-dom";
import SwitchMode from "../switchmode/SwitchMode.js";
import { useTheme } from "../../context/ThemeContext";
import Logo from "./Logo.js";
import Menu from "./Menu.js";

const Navbar = ({ className }) => {
  const { mode } = useTheme();

  return (
    <nav className={className}>
      <Nav className={`navbar ${mode}`}>
        <div id="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo color={mode === 'dark' ? 'white' : 'black'} width={27} height={28} fontSize={21} />
          </Link>
        </div>
        <NavMenu className="first-section">
          <NavLink to={'/home#top'} className="first-section-component" mode={mode}>
            Home
          </NavLink>
          <NavLink to='/home#portfolio-section' className="first-section-component" mode={mode}>
            Portfolio
          </NavLink>
          <NavLink to='/home#skills-section' className="first-section-component" mode={mode}>
            Skills
          </NavLink>
          <NavLink to="/users" className="first-section-component" mode={mode}>
            About Me
          </NavLink>
        </NavMenu>
        <NavMenu className="second-section">
          <SwitchMode />
          <NavBtn mode={mode}>
            Contact Me
          </NavBtn>
        </NavMenu>
        <NavMenu className="third-section">
          <Menu color={mode === 'dark' ? 'white' : 'black'} />
        </NavMenu>
      </Nav>
    </nav>
  );
};

export default Navbar;
