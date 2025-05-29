/**
 * Average mark
 *
 * @param {Array} arr
 * @return {Number}
 */
export const averageMark = (arr) => {
  const sum = arr.filter((item) => !Number.isNaN(item) && item !== null).reduce((a, b) => a + b, 0);
  return Math.floor(sum / arr.length);
};
