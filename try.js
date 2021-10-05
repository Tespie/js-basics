// What is the output for the following code?
// (function f() {
//   function f() {
//     return 1;
//   }
//   return f();
//   function f() {
//     return 2;
//   }
// })();

// --------------------------------------------

(function () {
  return typeof arguments;
})();
