const sumAll = function(startingNumber, endingNumber) {

    let sum = 0;

    if(startingNumber < 0 || endingNumber < 0) {
        return "ERROR";
    }



    if(typeof(startingNumber) != "number" || typeof(endingNumber) != "number") { //Alternative: Number.isInteger(startingNumber)
        return "ERROR";
    }

    if(startingNumber > endingNumber) {  
        for(let i = startingNumber; i >= endingNumber; i--) {
            sum += i;      
        }
    } else {
        for(let i = startingNumber; i <= endingNumber; i++) {
            sum += i;      
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
