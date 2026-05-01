//Class room exercise

//1
let n = 5;
if (n >= 0) {
  console.log("Possitive");
} else {
  console.log("negative");
}

//2
let age = 20;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can not vote");
}

//3
let num = 10;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//4
let marks = 40;
if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//5
let grade = 50;
if (grade > 90) {
  console.log("A");
} else if (grade > 75 && grade <= 90) {
  console.log("B");
} else if (grade > 50 && grade <= 75) {
  console.log("C");
} else {
  console.log("Fail");
}

//6
// let usr = prompt("Enter your username: ");
// let pass = prompt("Enter your Password: ");
// if (usr === "Prasoonsoni198" && pass === "123") {
//   console.log("Login Success");
// } else {
//   console.log("Login failed");
// }

//7
let data;
let name = "Prasoon";
data = name || "N/A";
console.log(data);

//Switch Case:

//8
let choice = prompt("Select your Choice:");
switch (choice) {
  case "1": {
    console.log("Tea");
    break;
  }
  case "2": {
    console.log("Coffee");
    break;
  }
  case "3": {
    console.log("Lassi");
    break;
  }
  default: {
    console.log("Pani");
  }
}
