import React, { useState, useRef, useEffect } from 'react';

import './style.scss';

const projectsData = [
    {
        name: 'Argent Bank',
        image: '/src/assets/images/projects/argentbank.p11.webp',
        description: `Argent Bank est un projet que j'ai réalisé dans le cadre de ma formation d'intégrateur Web chez OpenClassrooms. À partir d'une maquette fournie, j'ai développé une application web avec authentification des utilisateurs en utilisant les technologies HTML, CSS, JavaScript, React, React Router, Redux, SASS (SCSS), une API pour récupérer les données et MongoDB pour stocker les informations des utilisateurs. Le résultat final est une application web sécurisée permettant aux utilisateurs de se connecter à leur compte et de visualiser leurs transactions bancaires. Ce projet m'a permis de renforcer mes compétences en développement front-end et de découvrir l'architecture Redux pour la gestion d'état dans les applications web.`,
        github: 'https://github.com/Winandyc/ArgentBank.p11',
    },

    {
        name: 'Kasa',
        image: '/src/assets/images/projects/kasa.p8.webp',
        description: `
        Kasa est un projet sur lequel j'ai travaillé en tant que développeur front-end dans le cadre de ma formation chez OpenClassrooms. J'ai été chargé de réaliser plusieurs missions clés pour cette plateforme de location d'appartements. Tout d'abord, j'ai intégré les maquettes fournies en enrichissant le HTML pour offrir une expérience utilisateur immersive. Ensuite, j'ai développé la fonctionnalité de recherche d'appartements en utilisant les technologies HTML, CSS, JavaScript, React et React Router pour créer des interfaces dynamiques et interactives. J'ai également utilisé SASS (SCSS) pour organiser les styles de manière efficace. De plus, j'ai mis en place une API pour récupérer les données des appartements à afficher sur l'application. Le résultat final est une application web esthétique et fonctionnelle, qui m'a permis de renforcer mes compétences en développement front-end et d'approfondir ma compréhension de React.`,
        github: 'https://github.com/Winandyc/Kasa.p8',
    },

    {
        name: 'Sophie Bluel',
        image: '/src/assets/images/projects/sophiebluel.p6.webp',
        description: `"Portfolio de Sophie Bluel" est un projet sur lequel j'ai travaillé en tant que développeur front-end chez ArchiWebos. À partir des maquettes fournies par Charlotte, la cheffe de projet, j'ai réalisé plusieurs missions essentielles. Tout d'abord, j'ai développé la page de présentation des travaux de l'architecte en enrichissant le HTML fourni pour offrir une expérience immersive. Ensuite, j'ai créé la page de connexion de l'administrateur du site à partir de zéro pour assurer une sécurité optimale. Enfin, j'ai conçu la modale permettant d'uploader de nouveaux médias en partant de rien. Pour ce faire, j'ai utilisé les meilleures pratiques de développement front-end ainsi que les technologies les plus adaptées. J'ai intégré les maquettes à l'aide de Figma, en respectant scrupuleusement les designs tout en garantissant une interactivité fluide. En parallèle, j'ai collaboré avec l'équipe back-end pour assurer une intégration harmonieuse. Ce projet m'a permis de mettre en pratique mes compétences en développement front-end, notamment en HTML, CSS et JavaScript. J'ai également eu l'opportunité de découvrir de nouvelles technologies, contribuant ainsi à renforcer mes compétences.`,
        github: 'https://github.com/Winandyc/Sophie-Bluel.p6',
    },

    {
        name: 'Booki',
        image: '/src/assets/images/projects/booki.p3.webp',
        description: `Booki est un projet réalisé dans le cadre de ma formation d'intégrateur Web chez OpenClassrooms. J'ai travaillé à partir d'une maquette fournie pour intégrer la page d'accueil d'une agence de voyage fictive en utilisant les technologies HTML et CSS. J'ai également pris en compte les principes de conception adaptative pour assurer une expérience utilisateur optimale sur tous les types d'appareils (mobiles, tablettes, ordinateurs de bureau). Booki est un exemple de mon expertise en matière d'intégration web.`,
        github: 'https://github.com/Winandyc/Booki.p3',
        visiter: 'https://winandyc.github.io/Booki.p3/',
    },

    {
        name: 'Oh My Food',
        image: '/src/assets/images/projects/ohmyfood.p4.webp',
        description: `OhMyFood est un projet que j'ai réalisé dans le cadre de ma formation d'intégrateur Web chez OpenClassrooms. À partir d'une maquette fournie, j'ai travaillé sur l'intégration de la version mobile d'un site de foodtech avec des animations CSS. Ce projet m'a permis de mettre en pratique mes compétences en HTML et CSS, tout en utilisant SASS (SCSS) pour faciliter la gestion du code CSS. Le résultat final est un site web moderne qui met en avant les plats proposés par l'entreprise. Grâce à l'utilisation de SASS, j'ai pu gagner en productivité et en maintenabilité du code CSS, ce qui m'a permis de mieux organiser mon code et de le rendre plus facilement évolutif.`,
        github: 'https://github.com/Winandyc/Oh-My-Food.p4',
    },

    {
        name: '724 Events',
        image: '/src/assets/images/projects/724events.p10.webp',
        description: `En tant que développeur front-end freelance, j'ai été sollicité par l'agence événementielle 724events pour intervenir sur leur site web vitrine. Le projet avait été entamé par un autre développeur, mais des problèmes de bugs persistaient, compromettant le bon fonctionnement du site. Ma mission consistait à identifier ces bugs, les résoudre et finaliser le site. Après avoir pris en main le projet, j'ai effectué une analyse approfondie du code existant pour repérer les dysfonctionnements. J'ai ensuite entrepris la correction de ces bugs, en apportant des solutions efficaces pour assurer la stabilité et la performance du site. Parallèlement, j'ai complété le cahier de recette afin de documenter toutes les fonctionnalités du site et de garantir un fonctionnement sans faille. Cette expérience m'a permis de démontrer ma capacité à intervenir sur des projets en cours de développement, en trouvant des solutions rapides et efficaces aux problèmes rencontrés. J'ai également renforcé ma collaboration avec l'équipe en place, en assurant une transition fluide et en maintenant un haut niveau de qualité dans le développement du site web vitrine de 724events.`,
        github: 'https://github.com/Winandyc/724events.p10',
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const modalRef = useRef(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div id="projects" className='myProjects'>
            <h2>Mes projets</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div className="project" key={index} onClick={() => openModal(project)} data-description={project.description}>
                        <img src={project.image} alt={project.name} />
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className="modal">
                    <div className="modal-content" ref={modalRef}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h3>{selectedProject.name}</h3>
                        <p>{selectedProject.description}</p>
                        <div className="buttons-container">
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className={`github-button custom-background${selectedProject.name === "Booki" ? " left-align" : ""}`}>GitHub</a>
                            {selectedProject.visiter && (
                                <a href={selectedProject.visiter} target="_blank" rel="noopener noreferrer" className={`visit-button custom-background${selectedProject.name === "Booki" ? " right-align" : ""}`}>Visiter</a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
