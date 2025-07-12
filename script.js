document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Form submit hone se rokna

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded username and password
    const validUsername = 'rohit sharma';
    const validPassword = 'jaani_lyrical';

    // Check if username and password match
    if (username.toLowerCase().trim() === validUsername && password.toLowerCase().trim() === validPassword) {
        // Save login status in localStorage
        localStorage.setItem('loggedIn', 'true');
        alert('Login Successful');
        // Redirect to projects page or main page
        window.location.href = 'projects.html'; // Example
    } else {
        alert('Invalid username or password');
    }
});

// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const passwordType = passwordField.type;

    if (passwordType === 'password') {
        passwordField.type = 'text'; // Show password
    } else {
        passwordField.type = 'password'; // Hide password
    }
});
