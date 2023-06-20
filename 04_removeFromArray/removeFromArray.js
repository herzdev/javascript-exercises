const removeFromArray = function() {
/*
PSEUDOCODE
    füge paramter array und element hinzu
    erstelle eine variable namens index
    eruiere index von element in array mittels indexof und weise den wert der variable index hinzu > index = array.indexOf(element);
    lösche element an position array.splice(index)
    return das neue array

    arguments[0] = zu manipulierende Array
    arguments[1-n] = value der gelöscht werden muss

    Erstellung Variable index = 0;

    WENN arguments.length >= 2
        for zähler = i = 1;
        for-loop die von argument[i] bis argument[n] loopt; 
        Eruierung Index des Elements mittels index = array.indexOf(argument[i])
        Element mittels Indexierung entfernen: array.splice(index,1)
*/

    let index = 0;

    if(arguments.length >= 2) {
        for(let i = 1; i <= arguments.length - 1; i++) {
            index = arguments[0].indexOf(arguments[i]);
            if(index != -1) {
                arguments[0].splice(index, 1);
                // console.log(`Output: ${arguments[0]}`);
            } else {
                continue;
            }
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
