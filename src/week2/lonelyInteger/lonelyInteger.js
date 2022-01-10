export const lonelyInteger = (arrayOfIntegers) => {
    const unique = arrayOfIntegers.filter((integer) =>
        arrayOfIntegers.indexOf(integer) === arrayOfIntegers.lastIndexOf(integer));
    return unique[0];
}
