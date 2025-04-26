// question 1 solve :

const check_grade = (n) => {
    if(n >= 80 && n <= 100){
        return "A+";
    }else if( n >= 70){
        return "A-";
    }else if( n >= 60){
        return "A";
    }else if( n >= 50){
        return "B+";
    }else if( n >= 40){
        return "B";
    }else if( n >= 33){
        return "C";
    }else if( n < 33 && n >= 0){
        return "F";
    }else{
        return "Invalid mark..!!"
    }
};

const prompt = require('prompt-sync')();
let num = Number(prompt("Enter your mark: "));
console.log(`Yor Grade: ${check_grade(num)}`)