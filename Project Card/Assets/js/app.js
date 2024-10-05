
const projects = [
    { title: 'Project 1', type: 'web', image: './1.jpg', github: 'https://github.com/project1', code: 'www.code1.com' },
    { title: 'Project 2', type: 'app', image: './2.jpg', github: 'https://github.com/project2', code: 'Code 2' },
    { title: 'Project 3', type: 'web', image: './4.jpg', github: 'https://github.com/project3', code: 'Code 3' },
    { title: 'Project 1', type: 'web', image: './1.jpg', github: 'https://github.com/project1', code: 'Code 1' },
    { title: 'Project 2', type: 'app', image: './2.jpg', github: 'https://github.com/project2', code: 'Code 2' },
    { title: 'Project 3', type: 'web', image: './4.jpg', github: 'https://github.com/project3', code: 'Code 3' },
    // Add more projects here...
  ];

  const projectGrid = document.getElementById('projectGrid');
  const projectButtons = document.querySelectorAll('.project-buttons button');

  // Function to filter and display projects based on type
  function displayProjects(projectType) {
    projectGrid.innerHTML = '';

    projects.forEach(project => {
      if (projectType === 'all' || projectType === project.type) {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.title;

        const projectDetails = document.createElement('div');
        projectDetails.className = 'project-details';

        const projectTitle = document.createElement('p');
        projectTitle.textContent = project.title;

        const projectLinks = document.createElement('div');
        projectLinks.className = 'project-links';
        
        const githubLink = document.createElement('a');
        githubLink.href = project.github;
        githubLink.innerHTML = '<i class="fas fa-code icon"></i>GitHub';
        
        const codeLink = document.createElement('a');
        codeLink.href = project.code;
        codeLink.innerHTML = '<i class="fas fa-download icon"></i>Code';

        projectLinks.appendChild(githubLink);
        projectLinks.appendChild(codeLink);

        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(projectLinks);

        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectDetails);

        projectGrid.appendChild(projectCard);
      }
    });
  }

  projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    projectButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const projectType = button.classList[0];
    displayProjects(projectType);
  });
});
  // Display all projects by default
  const allButton = document.querySelector('.all');
allButton.classList.add('active');
displayProjects('all');