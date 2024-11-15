document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Define the correct password
    const correctPassword = 'xeenoub';

    // Get the entered password value
    const password = document.getElementById('password').value;

    // Check if the entered password is correct
    if (password === correctPassword) {
        // Redirect to another website if the password is correct
        window.location.href = 'https://xeenoub.github.io';
    } else {
        // Show an alert if the password is incorrect
        alert('Invalid password. Please try again.');
    }
});
