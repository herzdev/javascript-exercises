const reverseString = function(string) {
    
/*
PSEUDOCODE
Erstelle leere Variable namens manipulatedString;
.split() den string und weise ihn manipulatedString zu
.reverse() manipulatedString
.join() manipulatedString, damit aus Array wieder ein String wird
*/
let manipulatedString;

manipulatedString = string.split("").reverse().join("");

return manipulatedString;

};

// Do not edit below this line
module.exports = reverseString;
