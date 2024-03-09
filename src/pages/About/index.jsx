import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

const About = () => {
    // Définir la fonction handleGoBack
    const handleGoBack = () => {
        // Redirection vers la page d'accueil lorsque la flèche est cliquée
        window.location.href = '/';
    };

    return (
        <div className="about">
            <Link to="/" className="go-back" onClick={handleGoBack}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <h1>À propos de moi</h1>
            <div className="about__content">
                <div className="about__details">
                    <img src="/src/assets/images/moi.jpg" alt="Selfie de Winandy Christopher" />
                    <p>
                        Bienvenue sur mon portfolio ! Je suis Winandy Christopher, un jeune développeur web FrontEnd tout juste
                        diplômé de la formation "Intégrateur Web" dispensée par OpenClassRooms. Passionné par la création d'expériences
                        utilisateur exceptionnelles, j'ai acquis une première expérience dans le développement d'applications web modernes et interactives.
                        <br />
                        <br />
                        Mon parcours scolaire m'a permis de travailler sur une variété de projets, allant de sites web "simples" à des applications
                        d'entreprise bien plus complexes. Je suis constamment à l'affût des dernières technologies et tendances de l'industrie pour
                        fournir des solutions innovantes à mes clients.
                        <br />
                        <br />
                        En dehors du développement web, mes passions incluent le sport et les jeux vidéos. Je trouve aussi toujours du temps pour
                        m'investir dans des projets créatifs et stimulants.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;