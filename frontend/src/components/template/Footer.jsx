import './Footer.css'
import React from 'react'
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props =>
    <footer className="footer">
        <span>
            <FontAwesomeIcon icon={faDrumstickBite} className="text-warning"/> Confira nossas redes sociais!
        </span>
        <div className="socials">
            <span className="youtube text-danger">Youtube</span>
            <span className="twitter">Twitter</span>
            <span className="instagram">Instagram</span>
        </div>
    </footer>