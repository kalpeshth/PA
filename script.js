document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Step 1: Get data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    const userData = {
      name: name,
      email: email
    };
  
    // Step 2: Store in local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
  
    // Step 3: Simulate AJAX POST request (mocked)
    fetch("display.html", {
      method: "POST", // This will not really POST in static files, but used for simulation
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });
  
    // Step 4: Redirect
    window.location.href = "display.html";
  });
  