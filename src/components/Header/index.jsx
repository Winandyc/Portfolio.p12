import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="brand">Winandy Christopher</div>
            <nav className="nav">
                <ul>
                    <li><Link to="/" className="nav-link">Accueil</Link></li>
                    <li><Link to="/about" className="nav-link">A propos</Link></li>
                    <li><Link to="/Skills" className="nav-link">mes compétences</Link></li>
                    <li><Link to="/Projects" className="nav-link">Mes projets</Link></li>
                    <li><Link to="/Contact" className="nav-link">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
