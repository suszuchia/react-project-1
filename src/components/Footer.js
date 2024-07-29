import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 My Project Website. All rights reserved.</p>
        <div className="footer-icons">
          <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
          <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
