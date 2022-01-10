
/* Read Me contains the question */

export const miniMaxSum = (arrayOfIntegers) => {
    const sortArray = arrayOfIntegers.reduce((a,b) => {return a + b;});
    const minimumValue = sortArray - Math.max(...arrayOfIntegers);
    const maximumValue = sortArray - Math.min(...arrayOfIntegers);
    return console.log(minimumValue + " " + maximumValue);
}
