
// It is guaranteed that each type is 1, 2,3 ,4 , or 5 .

export const migratoryBirds = (arrayOfBirdSightings) => {
    let max= 0;
    let maxId = 0;
    const trackingArray = new Array(6).fill(0);
    for( const num of arrayOfBirdSightings) {
        trackingArray[num] ++;
        if(trackingArray[num] > max) {
            max = trackingArray[num];
            maxId = num;
        }
        else if ( trackingArray[num] === max && num < maxId) {
            maxId = num;
        }
    }
    return maxId
};


