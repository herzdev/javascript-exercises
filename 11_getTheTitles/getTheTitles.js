const getTheTitles = function(arr) {

    // Option #1 (with forEach)
    // const outputArray = [];

    // arr.forEach((element, index) => {
    //     outputArray.push(element.title);
    // })
    // return outputArray;

    // Option #2 (with .map())
    return arr.map(element => element.title);

};

// Do not edit below this line
module.exports = getTheTitles;
