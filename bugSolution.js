function foo(a, b) {
  // Check for null or undefined values
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Return 0 or handle the case appropriately
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