import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link для роутинга

const NavBar = () => (
  <nav className="header1">
    <div className="container">
      <div className="logo" id="logo">
        IDEA<br />SOFT
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <img src="image/menu.png" alt="Burger Menu" className="burger-img" />
      </label>
      <ul className="menu">
        <li><Link to="/">главная</Link></li> {/* Используем Link вместо <a> */}
        <li><Link to="/about">о компании</Link></li>
        <li><Link to="/services">услуги</Link></li>
        <li><Link to="/projects">проекты</Link></li>
      </ul>
      <a href="#contact-form" className="contact-button">СВЯЖИТЕСЬ С НАМИ <span>↗</span></a>
      <a href="#contact-form" className="contact-button-img">
        <img src="image/contact.png" alt="Свяжитесь с нами" />
      </a>
    </div>
  </nav>
);

export default NavBar;
