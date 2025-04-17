import React from 'react';
import { Link } from 'react-router-dom';

function Navbar2() {
  return (
    <nav className="header2">
      <div className="container">
        <div className="logo2">IDEA<br />SOFT</div>
        <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
        <label htmlFor="menu-toggle" className="menu-icon">
          <img src="image/menu2.png" alt="Burger Menu" className="burger-img" />
        </label>
        <ul className="menu2">
          <li><Link to="/">главная</Link></li>
          <li><Link to="/about">о компании</Link></li>
          <li><Link to="/services">услуги</Link></li>
          <li><Link to="/projects">проекты</Link></li>
        </ul>
        <Link to="/#contact-form" className="contact-button">
          СВЯЖИТЕСЬ С НАМИ <span>↗</span>
        </Link>
        <Link to="/#contact-form" className="contact-button-img">
          <img src="image/contact2.png" alt="Свяжитесь с нами" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar2;
