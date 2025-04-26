const input = require('prompt-sync')();

// question 4 solve :

const leap_year = (y) => {
    if((y%4 == 0 && y%100 != 0) || y%400 == 0){
        return "a leap year."
    }else{
        return "not a leap year."
    }
};

let num = Number(input("Enter a Number: "));
console.log(`Is ${leap_year(num)}`);