function Red() {
  document.getElementById("bulb1").style.backgroundColor = "red";
  document.getElementById("bulb1").style.color = "black";
  document.getElementById("bulb1").style.border = "none";
}
function Blue() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
  document.getElementById("bulb1").style.color = "white";
  document.getElementById("bulb1").style.border = "none";
}
function Green() {
  document.getElementById("bulb1").style.backgroundColor = "green";
  document.getElementById("bulb1").style.color = "white";
  document.getElementById("bulb1").style.border = "none";
}
function BulbOff() {
  document.getElementById("bulb1").style.backgroundColor = "white";
  document.getElementById("bulb1").style.color = "black";
  document.getElementById("bulb1").style.border = "none";
}

document.getElementById("red").addEventListener("click", Red);
document.getElementById("blue").addEventListener("click", Blue);
document.getElementById("green").addEventListener("click", Green);
document.getElementById("off").addEventListener("click", BulbOff);


document.getElementById("changeColor").addEventListener("change", ChangeColor);

function ChangeColor(){
    const color = document.getElementById("changeColor").value;
    document.getElementById("bulb1").style.backgroundColor = color;
}



