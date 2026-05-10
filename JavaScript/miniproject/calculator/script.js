function Calculate(data) {
  const expression = document.getElementById("text");
  if (data === "AC") {
    expression.innerText = "0";
    return;
  }
  if (data === "C") {
    expression.innerText = expression.innerText.slice(0, -1);
    return;
  }
  if (data === "=") {
    const Eq = expression.innerText;
    const solution = eval(Eq);
    expression.innerText = solution;
    return;
  }

  if (expression.innerText === "0") {
    expression.innerText = data;
  } else {
    expression.innerText = expression.innerText + data;
  }
}