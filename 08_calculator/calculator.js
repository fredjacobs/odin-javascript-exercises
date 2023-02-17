const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function() {
  let num1 = arguments[0];
  let num2 = arguments[1];

  return num1 - num2;
	
};

const sum = function(arr) {
  
	let answer = 0;
 
  

  

  if (arr.length == 0){
    return 0;
  }

  for(let i = 0; i < arr.length; i++){
    answer += arr[i];
    console.log(arr[i]);
  }
  return answer;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
