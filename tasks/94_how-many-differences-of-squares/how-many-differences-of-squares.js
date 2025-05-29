/**
 * How Many Differences of Squares?
 *
 * @param {Number} num
 * @return {Number}
 */

export const squares = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      count++;
    } else if (i % 4 === 0) {
      count++;
    }
  }
  return count;
};
