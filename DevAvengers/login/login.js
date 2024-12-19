      function toggleSlider() {
            const slider = document.getElementById('loginSlider');
            slider.classList.toggle('active');
        }

        function validatePassword(password) {
            const passwordError = document.getElementById('passwordError');
            const regex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            if (!regex.test(password)) {
                passwordError.textContent = "Password must be at least 8 characters long and include at least one special character.";
                return false;
            }
            passwordError.textContent = "";
            return true;
        }

        function handleSubmit(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!validatePassword(password)) {
                return;
            }

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('LOGGDIN');
            toggleSlider();
        }