// utilities.js

function welcome(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

function convert(value, conversionType) {
    if (conversionType === 'cmToM') {
        // Convert centimeters to meters
        return value / 100; 
    } else if (conversionType === 'mToCm') {
        // Convert meters to centimeters
        return value * 100; 
    } else {
        console.log('Invalid conversion type');
        return null;
    }
}

//Calculate the sum of numbers (as an array)
function calculate(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

function average() {
    let sum = 0;
    let count = 0;

    //using for loop to sum numbers
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        count++;
    }

    // Calculate the average
    const avg = sum / count;

    return avg;
}

exports.welcome = welcome;
exports.convert = convert;
exports.calculate=calculate;
exports.average=average;
