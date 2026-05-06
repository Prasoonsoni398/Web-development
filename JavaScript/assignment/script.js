function Submit(e) {
 
  const fn = document.getElementById("fullName").value;
  const city = document.getElementById("cityOutput").value;
  const fn = document.getElementById("useremail").value;
  const city = document.getElementById("userpassword").value;

  document.getElementById("name").innerText = fn;
  document.getElementById("city").innerText = city;
   
  document.getElementById("hideButton").classList.remove("divHide");

  document.getElementById("fullName").value = "";
  document.getElementById("cityOutput").value = "";

  document.getElementById("dataCard").classList.remove("divHide");
  document.getElementById("dataCard").classList.add("divShow");

}
function Hide() {
  document.getElementById("dataCard").classList.add("divHide");
  document.getElementById("hideButton").classList.add("divHide");
}
function showAlert() {
  document.getElementById("customAlert").style.display = "block";
}