import React from 'react';

import './style.scss';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__circle">
                {/* BOOKI */}
                <div className="project">
                    <img src="src/assets/images/booki.p3.png" alt="Projet 3 : Booki" />
                    <h3>BOOKI</h3>
                </div>

                {/* OHMYFOOD */}
                <div className="project">
                    <img src="src/assets/images/ohmyfood.p4.png" alt="Projet 4 : Oh My Food" />
                    <h3>OHMYFOOD</h3>
                </div>

                {/* SOPHIE BLUEL */}
                <div className="project">
                    <img src="project3.jpg" alt="Projet 6 : Sophie Bluel" />
                    <h3>SOPHIE.BLUEL</h3>
                </div>

                {/* KASA */}
                <div className="project">
                    <img src="project4.jpg" alt="Projet 8 : Kasa" />
                    <h3>KASA</h3>
                </div>

                {/* 724 EVENTS */}
                <div className="project">
                    <img src="project5.jpg" alt="Projet 10 : 724 events" />
                    <h3>724 EVENTS</h3>
                </div>

                {/* ARGENT BANK */}
                <div className="project">
                    <img src="project6.jpg" alt="Projet 11 : Argent Bank" />
                    <h3>ARGENT BANK</h3>
                </div>
            </div>
        </div>
    );
}

export default Projects;
