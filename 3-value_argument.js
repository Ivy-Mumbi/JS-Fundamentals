#!/usr/bin/node

// The first command-line argument passed to the script is at index 2
const firstArg = process.argv[2];

// Check if the first argument (process.argv[2]) is undefined
if (firstArg === undefined) {
  console.log("No argument");
} else {
  // If it's defined, print its value
  console.log(firstArg);
}
