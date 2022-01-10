/*
Given an array of integers, calculate the ratios of its elements
that are positive, negative, and zero.
Print the decimal value of each fraction
on a new line with  places after the decimal.

Output Format

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667
 */

export const plusMinus = (arrayOfIntegers) => {
    percentPositive(arrayOfIntegers);
    percentNegative(arrayOfIntegers);
    proportionOfZeros(arrayOfIntegers);
    return;
}

const percentPositive = (arrayOfIntegers) => {
    const lengthOfArray = arrayOfIntegers.length;
    const positiveNumbers = arrayOfIntegers.filter(n => n > 0).length;
    return console.log((positiveNumbers/lengthOfArray).toFixed(6));
}
const percentNegative = (arrayOfIntegers) => {
    const lengthOfArray = arrayOfIntegers.length;
    const negativeNumbers = arrayOfIntegers.filter(n => n < 0).length;
    return console.log((negativeNumbers/lengthOfArray).toFixed(6));
}
const proportionOfZeros = (arrayOfIntegers) => {
    const lengthOfArray = arrayOfIntegers.length;
    const zeros = arrayOfIntegers.filter(n => n === 0).length;
    return console.log((zeros/lengthOfArray).toFixed(6));
}
