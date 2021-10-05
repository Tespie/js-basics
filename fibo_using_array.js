// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// var __input_stdin = "";
// var __input_stdin_array = "";
// var __input_currentline = 0;

// process.stdin.on("data", function (data) {
//   __input_stdin += data;
// });

/*
 * Complete the function below.
 */
function fibonacciSequence(input) {
  //Type your code here.

  var i;
  var fib = []; // Initialize array!

  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= input; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
  }
  return fib;
}
// var fs = require("fs");
