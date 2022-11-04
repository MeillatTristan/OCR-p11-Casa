import React from 'react';
import {NavLink} from "react-router-dom"

import "./header.css"
import logo from "../../assets/images/LOGO.png"

function Header(props) {
  return (
    <header className='header'>
      <img src={logo} className="header__logo" alt="" />
      <nav className='header__navbar'>
        <NavLink end to="/" className={({ isActive }) =>
              isActive ? "header__navbar__links --active" : "header__navbar__links --inactive"
            } >Accueil</NavLink>
        <NavLink to="about" className={({ isActive }) =>
              isActive ? "header__navbar__links --active" : "header__navbar__links --inactive"
            } >A propos</NavLink>
      </nav>
    </header>
  )
}

export default Header;
