const repeatString = function(string, num) {
/*
PSEUDOCODE:
Erstelle eine Hilfsvariable namens finalString = "";
Erstelle eine for-loop die num-Mal durchläuft
Mit jedem Durchlauf füge der Hilfsvariable finalString den übergebenen string hinzu: finalstring += string
returne nach der for-loop finalString
*/
    if(num < 0) {
        return "ERROR";
    } else {
        let finalString = "";
        
        for(let i = 1; i <= num; i++) {
            finalString += string;
        }
        return finalString; 
    }
    
};

// Do not edit below this line
module.exports = repeatString;
