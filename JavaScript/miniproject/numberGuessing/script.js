let num = Math.floor(Math.random() * 10) + 1;
let chances = 5;

function checkGuess() {
  let guess = Number(document.getElementById("guessInput").value);
  let msg = document.getElementById("message");

  if (chances <= 0) return;

  if (!guess) {
    msg.innerText = " Enter a number!";
    return;
  }

  if (guess > num) {
    msg.innerText = " Too high!";
  } else if (guess < num) {
    msg.innerText = " Too low!";
  } else {
    msg.innerText = "🎉 You won!";
    msg.style.color = "green";
    chances = 0;
    return;
  }

  chances--;
  document.getElementById("chances").innerText = "Chances left: " + chances;

  if (chances === 0) {
    msg.innerText = " Game Over! Number was " + num;
    msg.style.color = "red";
  }
}

function resetGame() {
  num = Math.floor(Math.random() * 10) + 1;
  chances = 5;
  document.getElementById("message").innerText = "";
  document.getElementById("chances").innerText = "Chances left: 5";
  document.getElementById("guessInput").value = "";
}
