import React from 'react';
import './style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__social">
                    {/* Liens vers les réseaux sociaux */}
                    <a href="https://www.linkedin.com/in/christopher-winandy-7283032a3/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Winandyc" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className="footer__contact">
                    {/* Coordonnées de contact */}
                    <p>Contactez-moi : winandydev@gmail.com</p>
                </div>
            </div>
            <div className="footer__copyright">
                {/* Copyright et mentions légales */}
                <p>&copy; 2024 Winandy Christopher. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
