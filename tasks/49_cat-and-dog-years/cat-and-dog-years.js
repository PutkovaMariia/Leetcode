/**
 * Cats and Dogs years
 *
 * @param {Number} humanYears
 * @return {Array<Number>}
 */

const FIRST_YEAR_HUMAN = 1;
const SECOND_YEAR_HUMAN = 2;

const FIRST_YEAR_CAT = 15;
const SECOND_YEAR_CAT = 9;
const ADDITIONAL_YEAR_CAT = 4;

const FIRST_YEAR_DOG = 15;
const SECOND_YEAR_DOG = 9;
const ADDITIONAL_YEAR_DOG = 5;

export const catAndDogYears = (humanYears) => {
  if (humanYears === FIRST_YEAR_HUMAN) {
    return [humanYears, FIRST_YEAR_CAT, FIRST_YEAR_DOG];
  }
  if (humanYears === SECOND_YEAR_HUMAN) {
    return [humanYears, FIRST_YEAR_CAT + SECOND_YEAR_CAT, FIRST_YEAR_DOG + SECOND_YEAR_DOG];
  }
  return [
    humanYears,
    FIRST_YEAR_CAT + SECOND_YEAR_CAT + ADDITIONAL_YEAR_CAT * (humanYears - SECOND_YEAR_HUMAN),
    FIRST_YEAR_DOG + SECOND_YEAR_DOG + ADDITIONAL_YEAR_DOG * (humanYears - SECOND_YEAR_HUMAN)
  ];
};
