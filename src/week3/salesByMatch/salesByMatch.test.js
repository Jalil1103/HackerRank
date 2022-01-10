import { matchingSocks } from './salesByMatch';

describe('Sales By Match', () => {
    describe('GIVEN: an array of  integers representing sock colors', () => {
        it('THEN: returns the correct number of pairs of socks in the array', () => {
            //arrange
            const arrayOfSocks =  [10, 20, 20, 10, 10, 30, 50, 10, 20;
            const expectedPairs = 3

            //act
            const result = matchingSocks(arrayOfSocks);

            //assert
            expect(result).toEqual(expectedPairs);
        })
    })
})
