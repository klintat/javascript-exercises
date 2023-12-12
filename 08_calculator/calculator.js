const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	// const sum = array.reduce((total, item) => total + item);
  // return sum;
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
};

const power = function(a, b) {
	return array.Math.pow(a, b)
};

const factorial = function(n) {
	if (n === 0 || n === 1)
    return 1;
  for (var i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
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
