const palindromes = function (string) {

/*
ALGO

string-aufbereitung:
konvertiere string zu array
.filter() den string nach allen "., !?" und speichere das gefilterte array in ein neues
konvertiere alle buchstaben zu lower-case

*/
    let filteredArray;

    let arr = string.toLowerCase().split("");
    filteredArray = arr.filter(element => element != "!" && element != "?" && element != " " && element != "." && element != ",");

    let filteredString = filteredArray.join("");
    let reversedString = "";

    //.reverse wäre ebenfalls möglich gewesen.

    for(let i = filteredString.length - 1; i >= 0; i--) {
        reversedString += filteredString[i];
    }

    // return "filteredString: " + filteredString + " | reversedString: " + reversedString;

    if(filteredString === reversedString) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
