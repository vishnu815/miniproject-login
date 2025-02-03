// login.js

document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Create the payload to send to the backend
    const data = {
      username,
      password,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Successful login
        alert('Login successful!');
        window.location.href = 'tourguide.html'; // Redirect to the tour guide page
      } else {
        // Display the error message from the server
        alert(result.message || 'Login failed!');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while trying to log in.');
    }
  });
  