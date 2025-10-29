#!/usr/bin/node

/**
 * Computes the factorial of a number recursively.
 * @param {number} n - The number to compute the factorial of.
 * @returns {number} The factorial of n.
 */
function factorial (n) {
  // Base case: Factorial of NaN, 0, 1, or negative numbers is 1
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  // Recursive step
  return n * factorial(n - 1);
}

// Get the first argument and convert it to an integer
const arg = process.argv[2];
const num = parseInt(arg);

// Call the function and print the result
console.log(factorial(num));
