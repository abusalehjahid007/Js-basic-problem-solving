const input = require('prompt-sync')();

// question 3 solve :

const arr = [5, 12, 1, 19, 8, 15, 3, 7, 2, 20, 6, 10, 13, 4, 17, 9, 14, 11, 16, 18];
console.log(...arr.sort(function(a, b){return a - b}))