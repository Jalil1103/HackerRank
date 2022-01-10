import { migratoryBirds } from "./migratoryBirds";

describe('Migratory Birds', () => {
    describe('GIVEN: an array of bird sightings', () => {
        describe('AND: value corresponds to bird type',() => {
            it('THEN: returns the bird sighted most frequently', () => {
                //arrange
                const arrayOfBirdSightings = [1,1,2,2,3];
                const expectedBird = 1;

                //act
                const result = migratoryBirds(arrayOfBirdSightings);

                //assert
                expect(result).toEqual(expectedBird);
            });
        });
    });
});
