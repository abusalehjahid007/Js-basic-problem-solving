const input = require('prompt-sync')();

// question 8 solve :

let numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let no_duplicate = new Set(numbers);
console.log(Math.max(...no_duplicate));