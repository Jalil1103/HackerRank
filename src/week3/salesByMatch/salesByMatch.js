
export const matchingSocks = (lengthOfSockArray, arrayOfSocks) => {
    const sortedSocks = arrayOfSocks.sort((a,b) => a -b );
    return findPairs(sortedSocks, lengthOfSockArray);
};

//TODO: revist this structure, not a big fan of the for loop, and increment of index
// given a matching pair, seems there is better way.

const findPairs = (sortedSocks, lengthOfSockArray) => {
    let pairCount = 0;
    for(let i =0; i < lengthOfSockArray; i++ ) {
        if(sortedSocks[i] === sortedSocks[i+1]) {
            pairCount++;
            i++;
        }
    }
    return pairCount;
}


