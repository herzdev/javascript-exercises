const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	if (arr.length <= 0) {
    return 0;
  }
  return arr.reduce((a, b) => a + b);
};

const multiply = function(a, b) {
  // return arguments.length;
  let sum = 1;
  for(let i = 0; i <= (arguments.length - 1); i++) {
    sum *= arguments[i];
  }
  return sum;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if(num == 0) {
    return 1;
  } 
  /*
  ALGO
  erstelle ein leeres array
  loope von num - 1
  füge nach jeder iteration die aktuelle zahl in einem array hinzu
  reduce das array auf das faktorielle
  */

  let arr = [];
  for(let i = num; i >= 1; i--) {
    arr.push(i);
  }

  return arr.reduce((a, b) => a * b);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
