document.getElementById("redbox").addEventListener("mouseover", fillRedColor);
document.getElementById("redbox").addEventListener("mouseout", fillBaseColor);
document
  .getElementById("greenbox")
  .addEventListener("mouseover", fillGreenColor);
document.getElementById("greenbox").addEventListener("mouseout", fillBaseColor);
document.getElementById("bluebox").addEventListener("mouseover", fillBlueColor);
document.getElementById("bluebox").addEventListener("mouseout", fillBaseColor);

function fillRedColor() {
  document.getElementById("bulb1").style.backgroundColor = "red";
  document.getElementById("bulb1").style.border = "0px";
}

function fillGreenColor() {
  document.getElementById("bulb1").style.backgroundColor = "green";
  document.getElementById("bulb1").style.border = "0px";
}

function fillBlueColor() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
  document.getElementById("bulb1").style.color = "white";
  document.getElementById("bulb1").style.border = "0px";
}
function fillBaseColor() {
  document.getElementById("bulb1").style.backgroundColor = "white";
  document.getElementById("bulb1").style.color = "black";
  document.getElementById("bulb1").style.border = "1px solid black";
}

document.getElementById("square").addEventListener("mouseover", Square);
document.getElementById("square").addEventListener("mouseout", Circle);

function Square() {
  document.getElementById("bulb1").style.borderRadius = "20px";
  document.getElementById("bulb1").style.backgroundColor = "yellow";
  document.getElementById("bulb1").style.border = "0px";
  document.getElementById("bulb1").style.color = "black";
}
function Circle() {
  document.getElementById("bulb1").style.borderRadius = "50%";
  document.getElementById("bulb1").style.backgroundColor = "white";
  document.getElementById("bulb1").style.border = "1px solid black";
}
