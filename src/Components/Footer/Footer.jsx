import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Discover the world of premium keyboards and accessories at TypingTrove your destination for top-quality typing essentials.</p>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: ahamadarsh92@gmail.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/arshonthefarsh" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/Arsh_Ahmad31" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com/arsh_ahmad22?igshid=OGQ5ZDc2ODk2ZA==" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
