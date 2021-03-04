import React from 'react';
import Classes from './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const footer = (props) => {

    return(
        <footer className="footerContainer">
            <div className="social-icons">
                <h2>Follow Us</h2>
                <a href="#" className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="#" className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="#" className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
        </footer>
    );
}

export default footer;