const input = require('prompt-sync')();

// question 2 solve :

const oddEven = (n) => {
    if (n % 2 == 0) {
        return "Even Number";
    }
    else {
        return "Odd Number";
    }
};

let num = Number(input("Enter a Number: "));
console.log(`Result : ${oddEven(num)}`);