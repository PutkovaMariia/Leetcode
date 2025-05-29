/**
 * Index to insert
 *
 * @param {Array} arr
 * @param {Number} value
 * @return {Number}
 */

export const indexToInsert = (arr, value) => {
  const sortedArr = arr.sort((a, b) => a - b);
  let low = 0;
  let high = sortedArr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (sortedArr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};
