const fibonacci = function(size) {

// 1, 1, 2, 3, 5, 8, 13, 21, ...
//args: gewünschtes Element = Länge der Fibonacci Reihenfolge
/*

Array Zusammenstellung final:
Index 0 = 1
Index 1 = 1
Index 2 = Index 0 + Index 1
Index 3 = Index 1 + Index 2
Index 4 = Index 2 + Index 3
...
*/

    const fibonacciNumbers = [1, 1];
    
    if(size > 0) {
        for(let i = 2; i < Number(size); i++) { 
            fibonacciNumbers[i] = (fibonacciNumbers[i-1] + fibonacciNumbers[i-2]);
        }
        return fibonacciNumbers[size-1];
    }
    return "OOPS";     
    
};

// Do not edit below this line
module.exports = fibonacci;
