const projects = [
    {
        name: "Landing Page - SoluTech",
        description: "The SoluTech project is a modern and responsive landing page designed to showcase the services of a fictional technology solutions company. The page was planned and implemented with a focus on an attractive design, intuitive navigation, and optimized performance, providing a pleasant and efficient user experience.",
        link: "https://github.com/KauaZao0o/SoluTech"
    },
    {
        name: "Calculator in different programming languages",
        description: "The goal is to develop a fully functional and responsive calculator with an intuitive interface, featuring advanced capabilities such as percentage calculations, factorials, inverse operations, and history management. This project aims to explore various technologies and frameworks for implementing both the graphical interface and mathematical logic.",
        link: "https://github.com/KauaZao0o/Calculator"
    },
    {
        name: "E-Commerce - Motors-Commerce",
        description: "The Motors-Commerce project is a clean and modern e-commerce platform for vehicle sales, built with only HTML and CSS to ensure a lightweight and optimized user experience. It focuses on an intuitive interface, responsive design, and well-structured content presentation.",
        link: "https://github.com/KauaZao0o/Motors-Commerce"
    }
];

const projectSection = document.getElementById('projects');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = "project-card";

    projectCard.innerHTML = `
        <h2>${project.name}</h2>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View project</a>
    `;

    projectSection.appendChild(projectCard);
});