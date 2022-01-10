import { miniMaxSum } from "./miniMaxSum";

describe('Mini Max Sum - Week One -problem two', () => {
   describe('GIVEN: an array containing numbers', () => {
       it('THEN: logs the min and max', () => {
           //arrange
            const arrayOfIntegers = [1,2,3,4,5];
            const consoleSpy = jest.spyOn(console, 'log');
            const expectedResponse = '10 14';

            //act
            miniMaxSum(arrayOfIntegers);

            //assert

           expect(consoleSpy).toHaveBeenCalledTimes(1);
           expect(consoleSpy).toHaveBeenCalledWith(expectedResponse);
       });
   });
});
