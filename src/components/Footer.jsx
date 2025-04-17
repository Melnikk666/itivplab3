import React from "react";
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <a className="logo3" href="#logo">IDEA<br />SOFT</a>
          <a href="mailto:ideasoft@gmail.com" className="email">ideasoft@gmail.com</a>
          <div className="social-icons">
            <a href="https://www.instagram.com/nastyavav_"><img src="image/instagram.png" alt="Instagram" /></a>
            <a href="https://t.me/Kerik_06"><img src="image/telegram.png" alt="Telegram" /></a>
            <a href="#"><img src="image/linkedin.png" alt="LinkedIn" /></a>
          </div>
          <a href="#contact-form" className="contact-button footer-button">СВЯЖИТЕСЬ С НАМИ <span>↗</span></a>
        </div>
        <div className="footer-column">
          <h3>наш офис</h3>
          <p>в Минске</p>
          <p className=" number">+375 (29) 675-12-22</p>
          <p>ул. Комсомольская 44, 5 этаж, кабинет 522</p>
        </div>
        <div className="footer-column">
          <h3>услуги</h3>
          <ul>
            <li><HashLink smooth to="/services#development1">Техническая поддержка</HashLink></li>
            <li><HashLink smooth to="/services#development2">Frontend разработка</HashLink></li>
            <li><HashLink smooth to="/services#development3">Backend разработка</HashLink></li>
            <li><HashLink smooth to="/services#development4">Разработка мобильных приложений</HashLink></li>
            <li><HashLink smooth to="/services#development5">UI/UX дизайн</HashLink></li>
            <li><HashLink smooth to="/services#development6">Разработка ПО</HashLink></li>
        </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
