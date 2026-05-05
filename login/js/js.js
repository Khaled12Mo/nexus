alert("Welcome, Gaming Nerds!"); 

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.FORM');
    const submitBtn = document.getElementById('Press');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const isSignUp = submitBtn.innerText.includes('Sign Up');

            if (isSignUp) {
                handleSignUp();
            } else {
                handleSignIn();
            }
        });
    }

    function handleSignUp() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (email.includes('***')) {
            alert('Please remove the "***" and enter a valid email.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            document.getElementById('confirmPassword').style.border = '2px solid red';
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters.');
            return;
        }

        console.log('Account Created:', { name, email });
        alert('Welcome to NEXUS! Your account has been created.');
    }

    function handleSignIn() {
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        if (email.includes('***')) {
            alert('Please enter your actual email.');
            return;
        }

        console.log('Attempting Login:', email);
        alert('Logging in to NEXUS...');
    }

    const inputs = document.querySelectorAll('.input-field, .email, .password');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.style.border = 'none';
        });
    });
});