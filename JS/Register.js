document.getElementById('registration').addEventListener('submit', function(event) {
    let isValid = true;

    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('gender-error').textContent = '';
    document.getElementById('age-error').textContent = '';

    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required.';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    if (email.trim() === '' || !email.includes('@') || !email.includes('.')) {
        document.getElementById('email-error').textContent = 'Invalid email format.';
        isValid = false;
    }

    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    const gender = document.getElementById('gender').value;
    if (gender === '') {
        document.getElementById('gender-error').textContent = 'Gender is required.';
        isValid = false;
    }

    const age = document.getElementById('age').value;
    if (age.trim() === '' || isNaN(age) || age < 18 || age > 100) {
        document.getElementById('age-error').textContent = 'Age required above 18.';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});