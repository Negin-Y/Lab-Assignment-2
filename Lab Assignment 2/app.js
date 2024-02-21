const { greet, calculateSum } = require('./function');

greet('Negin');
console.log(calculateSum(2, 4));

const { welcome, convert, calculate, average } = require('./utilities');

// Test the welcome function
welcome('Negin', 'Yazdandoust');

// Test the convert function
console.log('150 cm to m:', convert(150, 'cmToM'));
console.log('1.5 m to cm:', convert(1.5, 'mToCm'));

// Test the calculate function
const sum = calculate(1, 2, 3, 4, 5); // Calculate the sum of numbers 1 to 5
console.log('Sum:', sum);

// Test the average function
console.log('The average is:',average(1, 2, 3)); 
console.log('The average is:',average(10, 20, 30, 40, 50)); 
