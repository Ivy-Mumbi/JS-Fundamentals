#!/usr/bin/node

/**
 * Adds two integers.
 * @param {number} a - The first integer.
 * @param {number} b - The second integer.
 * @returns {number} The sum of a and b.
 */
function add (a, b) {
  return a + b;
}

// Get the first and second arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Convert both arguments to integers and print their sum
// If an argument is missing, parseInt returns NaN,
// and the addition will also result in NaN.
console.log(add(parseInt(arg1), parseInt(arg2)));
