let name = "Prasoon Soni";
console.log("Name");
const val = 1;
for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}. Prasoon Soni `);
}
// for (character of name) {
//   console.log(character);
// }
// for (character in name) {
//   console.log(character);
// }
let student = {
  name: "Prasoon Soni",
  age: 22,
  semester: "8th",
  cgpa: 7.37,
};
for (let details in student) {
  console.log(details + " : " + student[details]);
}
let marks = [];
let n = prompt("Enter a number");
for (let i = 1; i <= n; i++) {
  marks[i - 1] = i;
}
console.log(marks);

for (let val in marks) {
  console.log(marks[val]);
}
console.log(`length of marks array is ${marks.length}`);


