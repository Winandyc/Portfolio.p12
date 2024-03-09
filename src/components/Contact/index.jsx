import React from 'react';
import './style.scss';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <div className="contact__links">
                <a href="https://www.linkedin.com/in/christopher-winandy-7283032a3/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                    LinkedIn
                </a>
                <a href="https://github.com/Winandyc" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    GitHub
                </a>
                <a href="mailto:winandydev@gmail.com">
                    <i className="fas fa-envelope"></i>
                    winandydev@gmail.com
                </a>
            </div>
        </div>
    );
}

export default Contact;
