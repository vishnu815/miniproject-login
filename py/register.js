document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Get form data
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const email = document.getElementById('email').value;

    try {
        // Send POST request to register the user
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }), // Send username, email, and password
        });
        if (response.ok) {
            alert('Registration successful! Redirecting to login page...');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            const error = await response.json();
            alert(`Error: ${error.message}`);
        }
    } catch (err) {
        console.error('Error during registration:', err);
        alert('Failed to register. Please try again later.');
    }
});
