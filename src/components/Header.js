import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content container">
        <div className="branding">
          <img className="logo" src="https://picsum.photos/200" alt="logo" />
          <h1>OUR COMPANY</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <a href="#service" className="nav-item">
              Home
            </a>
            <a href="#about" className="nav-item">
              About
            </a>
            <a className="nav-item disabled-nav-item">Contact</a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
