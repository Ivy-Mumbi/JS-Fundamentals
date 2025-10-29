#!/usr/bin/node

// The first argument is at index 2
const arg1 = process.argv[2];

// The second argument is at index 3
const arg2 = process.argv[3];

// Print the arguments in the specified " is " format
// Using a template literal correctly handles undefined values
console.log(`${arg1} is ${arg2}`);
