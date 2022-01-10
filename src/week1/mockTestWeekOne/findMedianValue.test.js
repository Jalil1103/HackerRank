import { findMedianValue } from "./findMedianValue";

describe('Mock Test - Week One', () => {
    describe('GIVEN: an  uneven  unsorted array of integers', () => {
        it('THEN: returns the median value of the array', () => {
            //arrange
            const  unsortedArray = [5,3,1,2,4];
            const expectedOutput = 3;

            //act
            const result = findMedianValue(unsortedArray);

            //assert
            expect(result).toEqual(expectedOutput);
        });
    });
    describe('GIVEN: an  even unsorted array of integers', () => {
        it('THEN: returns the median value of the array', () => {
            //arrange
            const  unsortedArray = [5,3,1,2,4, 4, 5, 6];
            const expectedOutput = 4;

            //act
            const result = findMedianValue(unsortedArray);

            //assert
            expect(result).toEqual(expectedOutput);
        });
    });
})
