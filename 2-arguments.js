#!/usr/bin/node

// Access the command-line arguments using process.argv
// process.argv[0] is 'node'
// process.argv[1] is the script path
// Actual arguments start from index 2

const argCount = process.argv.length - 2; // Calculate the number of actual arguments

if (argCount === 0) {
  console.log("No argument");
} else if (argCount === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
