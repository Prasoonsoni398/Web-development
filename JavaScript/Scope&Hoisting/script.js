let test = "this is Global test Variable";
function classA() {
  let test2 = "this is local variable";
  console.log("ClassA", test);
  console.log("ClassA", test2);
}
function classB() {
  console.log("ClassD", test);
}
function classC() {
  console.log("ClassC", test);
}
function classD() {
  console.log("ClassD", test);
}
function classE() {
  console.log("ClassE", test);
}
function classF() {
  console.log("ClassF", test);
}
function classG() {
  console.log("ClassG", test);
}

classA();
classB();
classC();
classD();
classE();
classF();
classG();
