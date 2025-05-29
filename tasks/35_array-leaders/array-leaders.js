/**
 * Array Leaders
 *
 * @param {Array<Number>} arr
 * @return {Array<Number>}
 */

export const arrayLeaders = (arr) => {
  let sumRightSide = 0;
  return arr
    .reverse()
    .filter((current) => {
      if (current > sumRightSide) {
        sumRightSide += current;
        return true;
      }
      sumRightSide += current;
      return false;
    })
    .reverse();
};
