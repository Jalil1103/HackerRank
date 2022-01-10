import { plusMinus } from "./plusMinus";

describe('Plus Minus - Week One - problem one', () => {
    describe('GIVEN: an Array of integers', () => {
        it('THEN: prints 3 statements of positive, negative, porportion of zeros', () => {
            // arrange
            const arrayOfIntegers = [-4, 3, -9, 0, 4, 1];
            const consoleSpy = jest.spyOn(console, 'log');
            const percentPositive  = '0.500000'
            const percentNegative = '0.333333'
            const proportionOfZeros = '0.166667'

            // act
            plusMinus(arrayOfIntegers);

            // assert
            expect(consoleSpy).toHaveBeenCalledTimes(3);
            expect(consoleSpy).toHaveBeenCalledWith(percentPositive);
            expect(consoleSpy).toHaveBeenCalledWith(percentNegative);
            expect(consoleSpy).toHaveBeenCalledWith(proportionOfZeros);
        });
    })
});
