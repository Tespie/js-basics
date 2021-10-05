// Comment
// console.log("Hello world");

// Variable rules
// can't be reserved word
// should be meaningful
// can't start with number (1name)
// can't contains space or hyphen(-)
// are case-sensitive

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();

let name = "tejas";
// console.log(name);

let firstName = "tejas";
let lastName = "Patel";

let intrestRate = 0.3;

let name1 = "Teju"; // String literal
let age = 23; // Number Literal
let isMarried = false; // Boolean literal

let person = {
  name: "tejas",
  age: 23,
};
person.name = "tejas reloaded";

// person["name"] = "Marry";
let selection = "name";
person[selection] = "Marry";

console.log(person.name);

// ARRAY - start

let selectedColors = ["red", "blue"];
selectedColors[2] = 11;
console.log("selectedColors"+selectedColors);
console.log("selectedColors length="+selectedColors.length);

// FUNCTIONS - START
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

function square(number) {
  return number * number;
}

console.log(square(2));

greet("tejas", "patel");
greet("patel");

function addtext(params) {
  // document.write("I will be caught on brekpoint");
  document.getElementById("h2").innerHTML =
    "I will be caught on brekpoint from js file";
}
