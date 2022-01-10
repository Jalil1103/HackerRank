import { pangram } from "./panagram";

describe('Pangram', () => {
    describe('GIVEN: a  sentence that is a pangram', () => {
        it('THEN: returns confirmation of pangram or not', () => {
            //arrange
            const sentence = 'The quick brown fox jumps over the lazy dog';
            const expectedResult = 'pangram';

            //act
            const result = pangram(sentence);

            //assert
            expect(result).toEqual(expectedResult);
        });
    });
    describe('GIVEN: a sentence that is not a pangram', () => {
       it('THEN: returns not panagram', () => {
           //arrange
           const sentence = 'We promptly judged antique ivory buckles for the prize';
           const expectedResult = 'not pangram';

           //act
           const result = pangram(sentence);

           //assert
           expect(result).toEqual(expectedResult);
       })
    });
});
