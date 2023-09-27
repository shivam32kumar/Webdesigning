document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('myForm');
    const signupButton = document.getElementById('signupButton');
    
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const emailPhn = document.getElementById('email_phn').value;
        const password = document.getElementById('pswd').value;
        const confirmPassword = document.getElementById('cnf_pswd').value;
        const checkbox = document.getElementById('chkbox').checked;

        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        const phoneRegex = /^\d{10}$/;
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!name) {
            alert('Please enter your Name.');
            return;
        }

        if (!emailPhn.match(emailRegex) && !emailPhn.match(phoneRegex)) {
            alert('Email or Phone is not valid.');
            return;
        }

        if (!password) {
            alert('Please enter a Password.');
            return;
        }

        if (!password.match(passwordRegex)) {
            alert('Password should contain at least one letter and one number.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (!checkbox) {
            alert('Please agree to the terms and conditions.');
            return;
        }

        // If all validation passes, you can submit the form or perform further actions
        alert('Form submitted successfully!');
        // signupForm.submit(); // Uncomment this line to submit the form
    });
});
