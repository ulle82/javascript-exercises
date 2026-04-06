const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function (arr) {
  const result = arr.reduce((a, b) => a + b, 0);
  return result;
};

const multiply = function (arr) {
  const resultMult = arr.reduce((a, b) => a * b, 1);
  return resultMult;
};

const power = function (a, b) {
	return a ** b;
};

const factorial = function(num) {
  return Array.from({ length: num }, (_, i) => i + 1).reduce((a, b) => a * b, 1)
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
