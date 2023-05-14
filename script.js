function login() {
  // Get the values of the admin no. and password fields
  const adminNo = document.getElementById("Admin No").value;
  const password = document.getElementById("Password").value;

  // Check if both fields are not empty
  if (adminNo.trim() === "" || password.trim() === "") {
    alert("Please enter both Admin No. and Password.");
    return;
  }

  // Use AJAX to send the data to the server for verification
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/login");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Redirect the user to the admin dashboard or perform any other necessary action
      window.location.href = "/dashboard";
    } else {
      alert("Login failed. Please try again.");
    }
  };
  xhr.send(JSON.stringify({ adminNo: adminNo, password: password }));
}
