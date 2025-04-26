const input = require('prompt-sync')();

// question 6 solve :

const large_name = (n) => {
    let large  = n[0];
    for(let i of n){
        if(i.length >= large.length){
            large = i;
        }
    }
    return large;
}

let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
console.log(large_name(friends));