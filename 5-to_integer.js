#!/usr/bin/node

// Get the first argument
const arg = process.argv[2];

// Attempt to convert the argument to an integer
const number = parseInt(arg);

// Check if the result is NaN (Not a Number)
if (isNaN(number)) {
  console.log("Not a number");
} else {
  // If it is a number, print it
  console.log(`My number: ${number}`);
}
