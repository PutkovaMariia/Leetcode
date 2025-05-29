/**
 * Sort by bits
 *
 * @param {Array<Number>} arr
 * @return {Array<Number>}
 */

const RADIX_BINARY = 2;

export const sortByBits = (arr) => {
  const countBits = (num) => num.toString(RADIX_BINARY).split('1').length - 1;
  return arr.sort((a, b) => {
    const bitCountA = countBits(a);
    const bitCountB = countBits(b);
    return bitCountA === bitCountB ? a - b : bitCountA - bitCountB;
  });
};
