let num = Math.floor(Math.random() * 10) + 1;
let guess;
guess = Number(prompt(`Guess number (1-10)\nChances left: 5`));

for (let i = 0; i < 5; i++) {

  if (guess > num) {
    guess = Number(prompt(`Too high! Try again\nChances left: ${5 - i}`));
  } 
  else if (guess < num) {
    guess = Number(prompt(`Too low! Try again\nChances left: ${5 - i}`));
  } 
  else {
    prompt("🎉 Congratulations! You won!");
    break;
  }

  if (i === 4 && guess!==num) {
    prompt("❌ Game Over! Number was " + num);
  }
}