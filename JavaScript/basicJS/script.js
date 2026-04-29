// let name = "Prasoon Soni";
// console.log("Name");
// const val = 1;
// for (let i = 0; i < 5; i++) {
//   console.log(`${i + 1}. Prasoon Soni `);
// }
// for (character of name) {
//   console.log(character);
// }
// for (character in name) {
//   console.log(character);
// }
// let student = {
//   name: "Prasoon Soni",
//   age: 22,
//   semester: "8th",
//   cgpa: 7.37,
// };
// for (let details in student) {
//   console.log(details + " : " + student[details]);
// }
// let marks = [];
// let n = prompt("Enter a number");
// for (let i = 1; i <= n; i++) {
//   marks[i - 1] = i;
// }
// console.log(marks);

// for (let val in marks) {
//   console.log(marks[val]);
// }
// console.log(`length of marks array is ${marks.length}`);

//Functions
let str = "Prasoon soni";
function myFunction(str) {
  let count = 0;
  for (let i of str) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
    }
  }
  console.log(count);
}
myFunction(str);

//Arrow function
let vowcount = (str) => {
  let count = 0;
  for (let i of str) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
    }
  }
  console.log(count);
};
vowcount(str);

let arr = ["Prasoon", "Soni", "RICR", "Bhopal"];
arr.forEach((val, i, arr) => {
  console.log(val, i, arr);
});

let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((val) => {
  console.log(val * val);
});

//MAp
let newArr = arr1.map((val) => {
  return val ** 2;
});
console.log(newArr);

//Filter     used for filtering true condition value
let evenArr = arr1.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArr);

//reduce    for single output in multiple input
let sum = 0;
const output = arr1.reduce((res, curr) => {
  return res + curr;
});
console.log(output);


//Practice:
let arr2 = [];
let n = prompt("Enter a number: ");
for (let i = 1; i <= n; i++) {
  arr2[i - 1] = i;
}
console.log(n);
console.log(arr2);

const sum1 = arr2.reduce((res, curr)=>{
  return res+curr;
});
const product = arr2.reduce((res, curr)=>{
  return res*curr;
});
console.log(sum1);
console.log(product);