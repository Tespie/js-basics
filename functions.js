function myFunc(theObject) {
  theObject.make = "Toyota";
}
var mycar = { make: "Honda", model: "Accord", year: 1998 };
var x, y;
x = mycar.make; // x gets the value "Honda"
myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
// (the make property was changed by the function)

//-----------------------------

/**
 *
 * Without Default Parameters
 */
function multiply_without(a, b) {
  b = typeof b !== "undefined" ? b : 1;

  return a * b;
}
multiply_without(5); // 5
console.log('WITHOUT Default Params =>',multiply_without(5));

/**
 *
 * With Default Parameters
 */
function multiply(a, b = 2) {
  return a * b;
}
multiply(5); // 10
console.log('WITH Default Params =>',multiply(5));


/**
 * Arrow Functions
 */
 var a = [  'Hydrogen',  'Helium',  'Lithium',  'Beryllium'];

 var a2 = a.map(function(s) { return s.length; });
 console.log(a2); // logs [8, 6, 7, 9]
 
 var a3 = a.map(s => s.length);
 console.log(a3); // logs [8, 6, 7, 9]

 

