import React from 'react';
import './style.scss';

const Skills = () => {
    return (
        <div className="skills">
            <h2>Mes compétences</h2>
            <div className="skills__list">
                <div className="skills__category">
                    <h3>Frontend</h3>
                    <ul>
                        <li>
                            <i className="fab fa-html5"></i> HTML
                        </li>
                        <li>
                            <i className="fab fa-css3-alt"></i> CSS
                        </li>
                        <li>
                            <i className="fab fa-sass"></i> SASS (SCSS)
                        </li>
                        <li>
                            <i className="fab fa-js"></i> JavaScript
                        </li>
                        <li>
                            <i className="fab fa-react"></i> React
                        </li>
                    </ul>
                </div>
                <div className="skills__category">
                    <h3>Outils</h3>
                    <ul>
                        <li>
                            <i className="fab fa-git-alt"></i> Git & GitHub
                        </li>
                        <li>
                            <i className="fab fa-figma"></i> Figma
                        </li>
                        <li>
                            <i className="fas fa-database"></i> MongoDB
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
