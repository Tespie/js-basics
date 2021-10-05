// Creating an array
let arr = [42]; // Creates an array with only one element:
// the number 42.

let arr2 = Array(42); // Creates an array with no elements
// and arr.length set to 42.
//
// This is equivalent to:
let arr3 = [];
arr3.length = 42;
console.log("arr=", arr3);

// let arr4 = Array(9.3)   // RangeError: Invalid array length
// console.log('Giving invalid Range to arr4=> ',arr4);

let wisenArray = Array.of(9.3); // wisenArray contains only one element 9.3
console.log("Using Array.of wisenArray => ", wisenArray);

/**
 * Populating an Array
 */
let emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
console.log("Populating an Array emp=", emp);

/**
 * Supplying a non-integer value to the array operator
 */
let arr5 = [];
arr5[3.4] = "Oranges";
console.log("Non Integer value length => ", arr5.length); // 0
console.log("Non Integer hasOwnProperty => ", arr5.hasOwnProperty(3.4)); // true

/**
 * Populating Array While Creating
 */
let array1 = new Array("Hello", emp, 3.14159);
console.log("Populating While Creating array1 => ", array1);

let array2 = ["Mango", "Apple", "Orange"];
console.log("Populating While Creating array2 => ", array2);


// Vichitra Array
var num = ["1","100","50", '5' , "8" , "11" , "12", '14' , [16], 17 , 18 , ()=> { return 200} ,  , "20" ]
console.log("num type ="+typeof num);
console.log("num length ="+num.length);
console.log("num on index 2 is => "+num[2]);
console.log("num on index 11 is => "+num[11]);  // function
console.log("num on index 12 is => "+num[12]);  // undefined
var even = num.filter(isEven)
console.log("even="+even);
function isEven(value)
{
    return value%2 == 0
}

/**
 * Length Property - Returns (last declared index + 1)
 */
let dogs = [];
dogs[30] = ["Mouly"];
console.log("tj_ Lets See Dogs => ", dogs); //  [ <30 empty items>, [ 'Mouly' ] ]
console.log("tj_ How Length Calculated? => ", dogs.length); // 31
dogs[3] = "Oreo";
console.log("tj_ NOW Lets See All Dogs => ", dogs); //  [ <3 empty items>, 'Oreo', <26 empty items>, [ 'Mouly' ] ]
console.log("tj_ How Final Length Calculated? => ", dogs.length); // 31

/**
 * Assiging value to Length Property
 */
let waiting = ["Single Tik", "Double Tik", "Blue Tik"];
console.log("Assign length waiting Length => ", waiting.length); // 3

waiting.length = 2;
console.log("Assign length 2 waiting => ", waiting); // logs "Single Tik, Double Tik" - Blue Tik has been removed

waiting.length = 0;
console.log("Assign length 0 waiting => ", waiting); // logs []; the waiting array is empty

waiting.length = 3;
console.log("Assign length 3 waiting => ", waiting); // logs [ <3 empty items> ]

/**
 * Iterating over arrays
 */
var loves = ["Laptop", "Mobile", "Music", "Sleep"];

// Using Simple For Loop
for (let i = 0; i < loves.length; i++) {
  console.log("Iterate Using For => ",loves[i])
}

console.log('\n -------------------- \n ');

// Using forEach Loop
loves.forEach(function (item, index, array) {
  // console.log("Iterate Using forEach item "+ item + " on index " + index);
    console.log("Iterate Using forEach => ",array);
});

/**
 * Shorten the code for the forEach parameter with ES2015 Arrow Functions:
 */
let colors = ['red', 'green', 'blue']
colors.forEach(function(color) {
  console.log(color);
})

colors.forEach(color => console.log("Colors Array With Arrow Function => ",color));

/**
 * Magic of UNDEFINED while Iterating Array
 */
 let numbers = ['first', 'second', , 'fourth']

 numbers.forEach(function(element) {
   console.log("MagicOfUndefined Numbers => ",element)
 })
 // first
 // second
 // fourth
 
 if (numbers[2] === undefined) {
   console.log('numbers[2] is undefined')  // true
 }
 
 numbers = ['first', 'second', undefined, 'fourth']
 
 numbers.forEach( item => console.log("MagicOfUndefined with undefined Numbers => ",item))
 // first
 // second
 // undefined
 // fourth

 /**
  * Array Methods
  * 1. concat() => joins two or more arrays and returns a new array.
  * 2. join() => joins all elements of an array into a string.
  * 3. push() => adds one or more elements to the end of an array and returns the resulting length of the array.
  * 4. pop() => removes the last element from an array and returns that element.
  * 5. shift() => removes the first element from an array and returns that element.
  * 6. unshift() => adds one or more elements to the front of an array and returns the new length of the array.
  * 7. slice() => extracts a section of an array and returns a new array.
  * 8. splice() => removes elements from an array and (optionally) replaces them.
  * 9. reverse() => transposes the elements of an array
  * 10. sort() => sorts the elements of an array in place, and returns a reference to the array.
  */

// concat
let myArray = new Array('1', '2', '3')
myArray = myArray.concat('a', 'b', 'c')
//.concat(array1);
console.log('METHODS concat =>',myArray);
// myArray is now ["1", "2", "3", "a", "b", "c"]

let joinedList = myArray.join('-')
console.log('METHODS join =>',joinedList);
// 1-2-3-a-b-c

let pushArray = new Array('1', '2')
pushArray.push('3') // pushArray is now ["1", "2", "3"]
// pushArray.push('4')  // pushArray is now ["1", "2", "3" , "4"]
console.log('METHODS push =>',pushArray);


let popArray = new Array('1', '2', '3')
let last = popArray.pop()
console.log('METHODS pop removed last=>',last);
console.log('METHODS pop =>',popArray);
// myArray is now ["1", "2"], last = "3"

let shiftArray = new Array('1', '2', '3')
let first = shiftArray.shift()
console.log('METHODS shift removed first=>',first);
console.log('METHODS shift =>',shiftArray);
// myArray is now ["2", "3"], first is "1"

let unshiftArray = new Array('1', '2', '3')
let lengthUnshifted = unshiftArray.unshift('4','5')
console.log('METHODS unshift =>',unshiftArray);
console.log('METHODS unshift length=>',lengthUnshifted);
// myArray becomes ["4", "5", "1", "2", "3"]


// slice(start_index , upto_index)
let sliceArray = new Array('a', 'b', 'c', 'd', 'e')
sliceArray = sliceArray.slice(1,4)
console.log('METHODS slice =>',sliceArray);
// returning [ "b", "c", "d"]

// splice(index, count_to_remove, addElement1, addElement2, ...)
let spliceArray = new Array('1', '2', '3', '4', '5')
spliceArray.splice(1,3,'a', 'b', 'c', 'd')
console.log('METHODS splice =>',spliceArray);
// returning ["1", "a", "b", "c", "d", "5"]

// reverse()
let reverseArray = new Array('1', '2', '3')
reverseArray.reverse()
console.log('METHODS reverse =>',reverseArray);
// transposes the array so that reverseArray = ["3", "2", "1"]

// sort()
let sortArray = new Array('Tejas', 'Github', 'JavaScript')
sortArray.sort()
console.log('METHODS sort =>',sortArray);
// transposes the array so that reverseArray =  [ 'Github', 'JavaScript', 'Tejas' ]

/**
 * Advance Methods
 * 11. indexOf(searchElement[, fromIndex]) => searches the array for searchElement and returns the index of the first match.
 * 12. lastIndexOf(searchElement[, fromIndex]) => works like indexOf, but starts at the end and searches backwards.
 * 13. map() => returns a new array of the return value from executing callback on every array item.
 * 14. filter() => returns a new array containing the items for which callback returned true.
 * 15. every() => returns true if callback returns true for every item in the array.
 * 16. some() =>  returns true if callback returns true for at least one item in the array.
 */

// indexOf(searchElement[, fromIndex])
let indexOfArray = ['a', 'b', 'a', 'b', 'a']
console.log("METHODS indexOf =>",indexOfArray.indexOf('b'))     // logs 1

// Now try again, starting from after the last match
console.log("METHODS indexOf with fromIndex =>",indexOfArray.indexOf('b', 2))  // logs 3
console.log("METHODS indexOf for absent Element =>",indexOfArray.indexOf('z'))     // logs -1, because 'z' was not found

// lastIndexOf(searchElement[, fromIndex])
let lastIndexOfArray = ['a', 'b', 'c', 'd', 'a', 'b']
console.log("METHODS lastIndexOf =>",lastIndexOfArray.lastIndexOf('b'))     // logs 5

// Now try again, starting from after the last match
console.log("METHODS lastIndexOf with fromIndex =>",lastIndexOfArray.lastIndexOf('b', 2))  // logs 1
console.log("METHODS lastIndexOf for absent Element =>",lastIndexOfArray.lastIndexOf('z'))     // logs -1, because 'z' was not found

// map()
let arrayToMap = ['a', 'b', 'c'];
let mappedArray = arrayToMap.map( item => item.toUpperCase())
console.log("METHODS map =>",mappedArray)     
// logs  [ 'A', 'B', 'C' ]

// filter()
let arrayToFilter = ['a', 10, 'b', 20, 'c', 30];
let filteredArray = arrayToFilter.filter( item => {return typeof item === 'number';})
console.log("METHODS filter =>",filteredArray)     
// logs [10, 20, 30]

// every()
// let arrayEvery = ['a', 10, 'b', 20, 'c', 30];
// let arrayEvery = [2 , 4 , 5 , 8 , 9 , 12 , 13 , 15];
let arrayEvery = [2 , 4 ,  8 ,  12 , 16 , 17];
let every = arrayEvery.every( item => {return item %2 === 0})
console.log("METHODS every =>",every)     
// logs true/false

// some()
// let someArray = [2 , 4 ,  8 ,  12 , 16];  // true
let someArray = [ "4" ,  "Eight" , 10];     // true
// let someArray = [ "4" ,  "Eight" , "string"];     // false
let some = someArray.some( item => {return typeof item  === "number"})
console.log("METHODS some =>",some)     



















