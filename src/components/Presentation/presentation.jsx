import React from 'react';
import './Presentation.scss';

const Presentation = () => {
    return (
        <div className="presentation">
            <div className="presentation__image">
                <img src="/assets/images/moi.jpg" alt="Selfie de Winandy Christopher" />
            </div>
            <div className="presentation__text">
                <h2>Bienvenue sur mon portfolio !</h2>
                <p>
                    Je suis Winandy Christopher, un développeur web FrontEnd passionné par la création d'expériences utilisateur exceptionnelles.
                    Mon objectif est de combiner ma créativité et mes compétences techniques pour développer des applications web innovantes et
                    engageantes.
                </p>
            </div>
        </div>
    );
}

export default Presentation;
