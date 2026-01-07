document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("loginMessage");

    // Temporary Dummy Logic
    if (username === "manager" && password === "1234") {
      window.location.href = "../pages/manager_dashboard.html";
    } else if (username === "agent" && password === "1234") {
      window.location.href = "../pages/sales_dashboard.html";
    } else if (username === "director" && password === "1234") {
      window.location.href = "../pages/director_dashboard.html";
    } else {
      message.textContent = "Invalid login details!";
    }
  });
