#!/usr/bin/node

// Get the first argument
const arg = process.argv[2];

// Attempt to convert the argument to an integer
const x = parseInt(arg);

// Check if the conversion resulted in NaN
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  // Loop 'x' times. This loop will not run if x <= 0.
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
