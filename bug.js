function foo(a, b) {
  return a + b;
}

function bar(x, y) {
  return foo(x, y) * 2;
}

console.log(bar(2, 3)); // Output: 10

//The bug is that if you pass in null or undefined, it will throw an error.

function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0;
  }
  return a + b;
}

function bar(x, y) {
  return foo(x, y) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(null, 3)); // Output: 0
console.log(bar(2, null)); // Output: 0
console.log(bar(null, null)); // Output: 0