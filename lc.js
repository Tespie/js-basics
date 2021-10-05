var obj = {};

obj.hey = "hello";
obj.bye = "good bye";
obj.excuse = "excuse me";
// console.log(obj);

// var myobj = new Object();
var myobj = { hey: "hello", bye: "good bye", excuse: "excuse me" };
delete myobj.excuse;
// myobj.excuse = null;

console.log(myobj);

var numbers = [1, 22, 3, 77, 890, 03, 5];

numbers.sort();
console.log(
  numbers.sort((a, b) => {
    return a - b;
  })
);

var add = function () {
  var i,
    sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
console.log(add(1, 2, 3, 4, 5));
console.log(add(1, 2, 3, 4));

var f = function foo() {
  console.log("Hello2");
};
var executor = function (fn) {
  fn();
};
executor(f); /*  returns "Hello" */
