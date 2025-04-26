const input = require('prompt-sync')();

// question 9 solve :

const monthlySavings = (arr, cost) => {
    if(arr instanceof Array && typeof cost == "number"){
        let totalAmountReceived = 0;
        for(let val of arr){
            if(val >= 3000){
                totalAmountReceived += (val - (val*.2));
            }else{
                totalAmountReceived += val;
            }
        }
        const remainAmount = totalAmountReceived - cost;
        if(remainAmount >= 0){
            return remainAmount;
        }else{
            return "\"earn more";
        }
    }else{
        return "invalid input";
    }
}


const numberOfPayment = Number(input("Payment number: "));
let monthPay = [];
for(let i=1; i<=numberOfPayment; i++ ){
    monthPay.push(Number(input("Payment amount: ")));
}

let livCost = Number(input("Living cost: "));

console.log(monthlySavings(monthPay, livCost));

