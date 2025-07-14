// Check if user is logged in
if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html'; // Redirect to login page if not logged in
} else {
    // Display projects after login
    const projectsList = document.getElementById('projectsList');

    // Define project names (excluding the "Project X" and "projectX.zip" parts)
    const projectTitles = [
        'Heading Element',
        'Paragraph Element',
        'Void Elements',
        'Top 3 Web Series',
        'List Elements',
        'Nesting and Indentation',
        'Anchor Elements',
        'Image Elements',
        'Birthday Invite',
        'File Paths',
        'Webpages',
        'HTML Portfolio',
        // 'Adding CSS',
        // 'CSS Selectors',
        // 'Color Vocab',
        // 'CSS Colors',
        // 'Font Properties',
        // 'CSS Box Model',
        // 'Motivation Meme',
        // 'CSS Cascade',
        // 'CSS Positioning',
        // 'Flag Project',
        // 'CSS Display',
        // 'CSS Float',
        // 'Responsiveness',
        // 'Media Query',
        // 'Web Design Agency',
        // 'Display Flex',
        // 'Flex Direction',
        // 'Flex Box Pricing Table',
        // 'Display Grid',
        // 'Grid Sizing',
        // 'Grid Placement',
        // 'Mondrian',
        

        // Add more project titles here as needed
    ];

    // Dynamically create the projects array
    const projects = projectTitles.map((title, index) => {
        const projectNumber = index + 1; // Start counting from 1
        const projectName = `Project ${projectNumber} <p id="projectName">${title}</p>`;
        const fileName = `./PROJECTS/project${projectNumber}.zip`; // Creates project1.zip, project2.zip, etc.
        return { name: projectName, file: fileName };
    });

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
