document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Get input values
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  // Validation
  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  // Email format check
  if (!email.includes("@")) {
    alert("Enter a valid email");
    return;
  }

  // Success message
  alert("Login Successful");

  // Clear fields
  document.querySelector('input[type="email"]').value = "";
  document.querySelector('input[type="password"]').value = "";
});
