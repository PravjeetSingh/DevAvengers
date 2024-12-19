function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    if (!username || !password) {
        document.getElementById('message').textContent = 'Please enter both username and password!';
        document.getElementById('message').style.color = 'red';
    } else if (!passwordRegex.test(password)) {
        document.getElementById('message').textContent = 'Password must be at least 8 characters long and include a special character!';
        document.getElementById('message').style.color = 'red';
    } else {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('message').textContent = 'User registered successfully!';
        document.getElementById('message').style.color = 'green';
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};
    const storedPassword = users[username];

    if (storedPassword && storedPassword === password) {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password!';
        document.getElementById('message').style.color = 'red';
    }
}
