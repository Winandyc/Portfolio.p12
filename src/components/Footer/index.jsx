import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                {/* Image */}
                <div className="footer__image">
                    <img src="/src/assets/images/footer/footer.img.jpg" alt="" />
                </div>
                {/* Logos LinkedIn et Github */}
                <div className="footer__social">
                    <h4>Retrouvez moi ici, aussi !</h4>
                    <div className="footer__social-icons">
                        <a href="https://www.linkedin.com/in/christopher-winandy-7283032a3/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Winandyc" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                {/* Projets */}
                <div className="footer__projects">
                    <h4>Projets</h4>
                    <ul>
                        <li><a href="lien_vers_argent_bank">Argent Bank</a></li>
                        <li><a href="lien_vers_kasa">Kasa</a></li>
                        <li><a href="lien_vers_sophie_bluel">Sophie Bluel</a></li>
                    </ul>
                </div>
                {/* Navigation */}
                <div className="footer__explore">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="#home">Accueil</a></li>
                        <li><Link to="/about" className="nav-link">A propos</Link></li>
                        <li><a href="#skills">Mes compétences</a></li>
                        <li><a href="#projects">Mes projets</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <p>&copy; 2024 Winandy Christopher. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
