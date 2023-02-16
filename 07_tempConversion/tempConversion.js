const convertToCelsius = function(f) {

   const cel = (f - 32) * 5/9;
   return parseFloat(Number(cel.toFixed(1)));
};

const convertToFahrenheit = function(c) {
  
  const far = (c * 9/5) + 32;
  return parseFloat(Number(far.toFixed(1)));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
