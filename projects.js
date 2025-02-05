// Check if user is logged in
if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html'; // Redirect to login page if not logged in
} else {
    // Display projects after login
    const projectsList = document.getElementById('projectsList');
    const projects = [
        { name: 'Project 1 <p id="projectName"> Heading Element </p>', file: 'project1.zip' },
        { name: 'Project 2 <p id="projectName"> Paragraph Element </p>', file: 'project2.zip' },
        { name: 'Project 3 <p id="projectName"> Void Elements </p>', file: 'project3.zip' },
        { name: 'Project 4 <p id="projectName"> Top 3 Web Series </p>', file: 'project4.zip' },
        // Add more projects here as needed
    ];

    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="#" class="project-name">${project.name}</a>
            <a href="${project.file}" download class="download-button">Download</a>
        `;
        projectsList.appendChild(li);
    });
}

// Logout function
function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html'; // Redirect to login page
}
