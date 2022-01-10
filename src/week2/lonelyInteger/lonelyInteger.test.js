import { lonelyInteger } from "./lonelyInteger";

describe('LonelyInteger', () => {
    describe('GIVEN: an array of integers', () => {
        describe('WHEN: only one integer does not repeat', () => {
            it('THEN: returns the non repeating integer', () => {
                //arrange
                const arrayOfIntegers = [1,2,3,4,3,2,1];
                const expectedInteger = 4;

                //act
                const result = lonelyInteger(arrayOfIntegers);

                //assert
                expect(result).toEqual(expectedInteger);
            });
        });
    });
});
