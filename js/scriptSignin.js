function createAccount() {
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Check if the passwords match
    if (password !== confirmPassword) {
      document.getElementById('result').textContent = 'Passwords do not match';
      return;
    }
  
    // Store the user information in local storage
    const user = { fullName, email, password };
    localStorage.setItem('user', JSON.stringify(user));
  
    // Display a success message
    document.getElementById('result').textContent = 'Account created successfully';
  }
  