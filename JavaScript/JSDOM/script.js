function Submit() {
  const fn = document.getElementById("fullName").value;
  console.log("Submit Button Clicked");
  console.log(fn);
  document.getElementById("myData").innerText = fn;
  document.getElementById("fullName").value = "";

  document.getElementById("dataCard").classList.add("divShow");
  document.getElementById("hideButton").classList.add("divShow");
  document.getElementById("hideButton").classList.remove("divHide");
  document.getElementById("dataCard").classList.remove("divHide");
}

function Hide() {
  
}
