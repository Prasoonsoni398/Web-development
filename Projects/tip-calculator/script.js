function Calculate(data) {
  const expression = document.getElementById("text");
  if (data === "AC") {
    expression.innerText = "0";
  }
  if (data === "C") {
    const eq = expression.innerText;
    let newEQ = eq.slice(0, -1);
  }
}
