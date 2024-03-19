import React, { useState } from 'react';
import './style.scss';

const projectsData = [
    {
        name: 'Argent Bank',
        image: '/src/assets/images/projects/argentbank.p11.webp',
        description:
            `Argent Bank est un projet que j'ai réalisé dans le cadre de ma formation d'intégrateur Web chez OpenClassrooms.
            À partir d'une maquette fournie, j'ai développé une application web avec authentification des utilisateurs en utilisant les technologies HTML,
            CSS, JavaScript, React, React Router, Redux, SASS (SCSS), une API pour récupérer les données et MongoDB pour stocker les informations des
            utilisateurs. Le résultat final est une application web sécurisée permettant aux utilisateurs de se connecter à leur compte et de visualiser
            leurs transactions bancaires. Ce projet m'a permis de renforcer mes compétences en développement front-end et de découvrir l'architecture
            Redux pour la gestion d'état dans les applications web.`
    },

    {
        name: 'Kasa',
        image: '/src/assets/images/projects/kasa.p8.webp',
        description:
            `Kasa est une application web que j'ai développée dans le cadre de ma formation d'intégrateur Web chez OpenClassrooms. À partir d'une
            maquette fournie, j'ai réalisé l'intégration et le développement de cette plateforme de location d'appartements en utilisant les technologies
            HTML, CSS, JavaScript, ainsi que les bibliothèques React et React Router pour créer des interfaces utilisateur dynamiques et interactives.
            J'ai également utilisé SASS (SCSS) pour faciliter la gestion des styles et une API pour récupérer les données des appartements à afficher sur
            l'application. J'ai notamment créé un composant dropdown pour les descriptions et les équipements des appartements, ainsi qu'un slider pour
            l'affichage des images. Le résultat final est une application web esthétique et fonctionnelle, qui m'a permis de mieux comprendre les concepts
            clés de React et de développer mes compétences en développement front-end.`
    },

    {
        name: 'Sophie Bluel',
        image: '/src/assets/images/projects/sophiebluel.p6.webp',
        description: 'Description de Sophie Bluel.'
    },

    {
        name: 'Booki',
        image: '/src/assets/images/projects/booki.p3.webp',
        description: `Booki est un projet réalisé dans le cadre de ma formation d'intégrateur Web chez OpenClassrooms. J'ai travaillé à partir d'une
        maquette fournie pour intégrer la page d'accueil d'une agence de voyage fictive en utilisant les technologies HTML et CSS. J'ai également pris
        en compte les principes de conception adaptative pour assurer une expérience utilisateur optimale sur tous les types d'appareils (mobiles,
        tablettes, ordinateurs de bureau). Booki est un exemple de mon expertise en matière d'intégration web.`
    },

    {
        name: 'Oh My Food',
        image: '/src/assets/images/projects/ohmyfood.p4.webp',
        description:
            `OhMyFood est un projet que j'ai réalisé dans le cadre de ma formation d'intégrateur Web chez OpenClassrooms. À partir d'une maquette fournie,
           j'ai travaillé sur l'intégration de la version mobile d'un site de foodtech avec des animations CSS. Ce projet m'a permis de mettre en pratique
           mes compétences en HTML et CSS, tout en utilisant SASS (SCSS) pour faciliter la gestion du code CSS. Le résultat final est un site web moderne
           qui met en avant les plats proposés par l'entreprise. Grâce à l'utilisation de SASS, j'ai pu gagner en productivité et en maintenabilité du
           code CSS, ce qui m'a permis de mieux organiser mon code et de le rendre plus facilement évolutif.`
    },

    {
        name: '724 Events',
        image: '/src/assets/images/projects/724events.p10.webp',
        description: 'Description de 724 Events.'
    },
];

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);

    const toggleShowProjects = () => {
        setShowAllProjects(!showAllProjects);
    };

    return (
        <div className='myProjects'>
            <h2>Mes projets</h2>
            <div className="projects-container">
                {showAllProjects ? projectsData.map((project, index) => (
                    <div className="project" key={index}>
                        <img src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <div className="project-description" data-description={project.description}>
                            {project.description}
                        </div>
                    </div>
                )) : projectsData.slice(0, 3).map((project, index) => (
                    <div className="project" key={index}>
                        <img src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <div className="project-description" data-description={project.description}>
                            {project.description}
                        </div>
                    </div>
                ))}
            </div>
            {!showAllProjects && (
                <div className="show-more">
                    <button onClick={toggleShowProjects}>Plus de projets</button>
                </div>
            )}
        </div>
    );
};

export default Projects;
