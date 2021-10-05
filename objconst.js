function Animal(name, isKing, food) {
  this.name = name;
  this.isKing = isKing;
  this.food = food;
}

// var _var = "my var";

// var let = "my var";

var a1 = new Animal("Lion", true, "rabbits");
var a2 = new Animal("Deer", false, "grass");
var a3 = new Animal("Elephant", false, "bananas and fruits");

console.log("Printing Object Created from Function..."+a1);
console.log("a1 ==> "+a1);
console.log(a1);
console.warn("Well Played with Object");

var name1 = "ben"; // global scope
const name4 = "const at Global";
myFunction();
function myFunction() {
  var name1 = "again_name1 inside fun"; // allowed to declare same var name as global inside function
  var name1 = "dfdfd"
  console.log("tttttttttttttttt => "+name1)
  var name1 = true; // type and value of name1 will be changed to boolean and true respectively as per the latest assigns you made
  name1 = 10; // type and value of name1 will be changed to NUMBER and '10' respectively as per the latest assigns you made
  //   let name1 = "bob renamed";        // ERROR : SyntaxError: Identifier 'name1' has already been declared
  //   const name1 = "changing name1 to "; // ERROR : SyntaxError: Identifier 'name1' has already been declared

  let name3 = "try";
  //   var name3 = "33"; // ERROR : SyntaxError: Identifier 'name3' has already been declared
  //   const name3 = "let to const"; // ERROR : SyntaxError: Identifier 'name3' has already been declared
  name3 = 23; // type and value can be changed at runtime

  const name4 = "this is constant";
  //   let name4 = "changing const to let"; // ERROR : SyntaxError: Identifier 'name4' has already been declared
  //   var name4 = "changing const"; // ERROR : SyntaxError: Identifier 'name4' has already been declared
  //   name4 = "changing const value"; // ERROR : TypeError: Assignment to constant variable.

  console.log("name1= " + name1);
  //   console.log(name2);
  console.log("name3= " + name3 + " datatype= " + typeof name3);
  console.log(name4);
}
// console.log(name2);
console.log("global const name4=" + name4);

var i = 1;
if (function f() {}) {
  i += typeof f;
}
// x;

console.log("last=");

function test(x) {
  while (x < 5) {
    x++;
  }
  return x;
}
console.log(test(2));

function multi(a, b) {
  var ans = a * b;
  return ans;
}
var c = _________;
