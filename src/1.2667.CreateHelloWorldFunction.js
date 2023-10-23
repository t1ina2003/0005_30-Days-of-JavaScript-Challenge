/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return (...args) => "Hello World";
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// Basic Syntax, function f(a, b) {

// Anonymous Function, var f = function(a, b) {

/** Immediately Invoked Function Expression (IIFE)
const result = (function(a, b) {
  const sum = a + b;
  return sum;
})(3, 4);
*/

/** Functions Within Functions
function createFunction() {
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
*/

/** Function Hoisting, use before declaration
function createFunction() {
  return f;
  function f(a, b) {
    const sum = a + b;
    return sum;
  }
}*/

/** Closures
function createAdder(a) {
  function f(b) {
    const sum = a + b;
    return sum;
  }
  return f;
}
const f = createAdder(3);
console.log(f(4)); // 7
*/

// Arrow Syntax, const f = (a, b) => {

// Omit Return,  const f = (a, b) => a + b;

// Rest Arguments, function f(...args) {

// a function that accepts a function and/or returns a function is called a higher-order function,
