import React, { useRef, useEffect } from 'react';
import './style.scss';

const Projects = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const wheelRadius = 200; // Rayon de la roue
        const numProjects = 6; // Nombre de projets
        const angleIncrement = (2 * Math.PI) / numProjects; // Incrément d'angle pour chaque projet

        // Effacement du canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dessin de la roue avec ses rayons
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, wheelRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Dessin des rayons de la roue
        for (let i = 0; i < numProjects; i++) {
            const angle = angleIncrement * i;
            ctx.moveTo(canvas.width / 2, canvas.height / 2);
            ctx.lineTo(canvas.width / 2 + wheelRadius * Math.cos(angle), canvas.height / 2 + wheelRadius * Math.sin(angle));
        }
        ctx.stroke();

        // Positionnement des projets sur la roue
        const projects = [
            { name: 'Booki', image: '/src/assets/images/projects/booki.p3.webp' },
            { name: 'Oh My Food', image: '/src/assets/images/projects/ohmyfood.p4.webp' },
            { name: 'Sophie Bluel', image: '/src/assets/images/projects/sophiebluel.p6.webp' },
            { name: 'Kasa', image: '/src/assets/images/projects/kasa.p8.webp' },
            { name: '724 Events', image: '/src/assets/images/projects/724events.p10.webp' },
            { name: 'Argent Bank', image: '/src/assets/images/projects/argentbank.p11.webp' }
        ];

        projects.forEach((project, index) => {
            const projectAngle = angleIncrement * index;
            const projectX = canvas.width / 2 + (wheelRadius * Math.cos(projectAngle)) - 60;
            const projectY = canvas.height / 2 + (wheelRadius * Math.sin(projectAngle)) - 60;
            const image = new Image();
            image.src = project.image;
            image.onload = () => {
                ctx.drawImage(image, projectX, projectY, 120, 120);
            };
        });
    }, []);

    return (
        <div className="projects">
            <h2>Mes projets</h2>
            <canvas ref={canvasRef} width={400} height={400} className="canvas" />
        </div>
    );
}

export default Projects;
