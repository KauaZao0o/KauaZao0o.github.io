const projects = [
    {
        name: "Landing Page - SoluTech",
        description: "The SoluTech project is a modern and responsive landing page designed to showcase the services of a fictional technology solutions company. The page was planned and implemented with a focus on an attractive design, intuitive navigation, and optimized performance, providing a pleasant and efficient user experience.",
        link: "https://github.com/KauaZao0o/SoluTech"
    },
    {
        name: "Projeto 2",
        description: "Em desenvolvimento",
        link: "https://github.com/KauaZao0o"
    },
    {
        name: "Projeto 3",
        description: "Em desenvolvimento",
        link: "https://github.com/KauaZao0o"
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