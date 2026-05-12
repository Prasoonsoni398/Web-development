function submit() {
  const fn = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const Email = document.getElementById("email").value;
  const Pass = document.getElementById("password").value;

  console.log(fn);
  console.log(phone);
  console.log(Email);
  console.log(Pass);

  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });

  if (!/^[A-Za-z\s]+$/.test(fn)) {
    document.getElementById("NameError").innerText = "Invalid Full Name";
  }
  if (!/^[A-Za-z\.\_\d]+@gmail.com$/.test(Email)) {
    document.getElementById("EmailError").innerText = "Invalid Email";
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    document.getElementById("PhoneError").innerText = "Invalid Phone";
  }
}
