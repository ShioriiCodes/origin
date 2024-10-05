const showPasswordCheckbox = document.getElementById('showPassword');
const passwordInput = document.getElementById('password');

showPasswordCheckbox.addEventListener('change', function() {
    // Toggle the password input type based on the checkbox status
    passwordInput.type = this.checked ? 'text' : 'password';
});