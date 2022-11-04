import React from 'react';

import "./footer.css";
import logo from "../../assets/images/LOGOWhite.png"

function Footer(props) {
  return (
    <footer>
      <img src={logo} alt="Logo footer"/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;