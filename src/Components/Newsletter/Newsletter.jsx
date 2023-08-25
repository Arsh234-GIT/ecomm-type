import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter-container">
      <h2>Stay Updated</h2>
      <p>Subscribe to our newsletter for the latest news and offers.</p>
      <div className="subscribe-form">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="newsletter-icon">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
}

export default Newsletter;
