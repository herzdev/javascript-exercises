const convertToCelsius = function(fahrenheit) {
  
  // let celsius = ((fahrenheit - 32) * 5 / 9);

  // if(celsius == 0) {
  //   return celsius.toFixed(0);
  // } else {
  //   return celsius.toFixed(1);
  // }
  
  return Number(((fahrenheit - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  return Number((celsius * 9/5 + 32).toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
