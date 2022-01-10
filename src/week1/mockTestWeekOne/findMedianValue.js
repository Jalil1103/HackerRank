
export const findMedianValue = (arrayOfIntegers) => {
    const sortedArray = arrayOfIntegers.sort((a,b) => {return a - b});
    const lengthOfArray = arrayOfIntegers.length;
    const isEven = (lengthOfArray%2 === 0);
    if(isEven){
        const first = sortedArray[lengthOfArray / 2 - 1];
        const second = sortedArray[lengthOfArray / 2];
        return (first + second) / 2;
    }
    const mid = Math.floor(lengthOfArray / 2);
    return sortedArray[mid];
};
