#!/usr/bin/node

// Get the first argument
const arg = process.argv[2];

// Attempt to convert the argument to an integer
const size = parseInt(arg);

// Check if the conversion resulted in NaN
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // This loop will not run if size <= 0
  for (let i = 0; i < size; i++) {
    // Create a string of 'X' repeated 'size' times and print it
    console.log("X".repeat(size));
  }
}
