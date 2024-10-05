
// JavaScript to handle menu toggle
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-menu ul').classList.toggle('show');
});

// Show Password/Sign-up Page
const showPasswordCheckbox = document.getElementById('showPassword');
const passwordInput = document.getElementById('password');

showPasswordCheckbox.addEventListener('change', function() {
    // Toggle the password input type based on the checkbox status
    passwordInput.type = this.checked ? 'text' : 'password';
});

// Send Alert message
function sendCode() {
    const email = document.getElementById("email").value;
    
    if (email) {
        // Simulate sending code to email
        alert("A code has been sent to " + email);
        
        // Show the code verification input
        document.getElementById("code-verification").style.display = "block";
    } else {
        alert("Please enter a valid email address.");
    }
}
function verifyCode() {
    const code = document.getElementById("code").value;
    
    if (code) {
        // Verify code (For demonstration, assume any code works)
        alert("Code verified! You can now reset your password.");
    } else {
        alert("Please enter the verification code sent to your email.");
    }
}
