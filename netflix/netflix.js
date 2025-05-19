function validateLogin(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageDiv = document.getElementById("message");
  
    const correctUsername = "aaaaa";
    const correctPassword = "12345";
  
    if (username === "" || password === "") {
      messageDiv.textContent = "Please fill in all fields.";
      messageDiv.style.color = "red";
    } else if (username === correctUsername && password === correctPassword) {
      messageDiv.textContent = "Login successful!";
      messageDiv.style.color = "green";
    } else {
      messageDiv.textContent = "Wrong credentials.";
      messageDiv.style.color = "red";
    }
  }
  