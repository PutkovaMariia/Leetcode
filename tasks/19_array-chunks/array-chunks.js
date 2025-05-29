/**
 * Array chunks
 *
 * @param {Array} arr
 * @param {Number} splitSize
 * @return {Array<Array>}
 */

export const arrayChunks = (arr, splitSize) =>
  arr.reduce((acc, _, index) => {
    if (index % splitSize === 0) {
      acc.push(arr.slice(index, index + splitSize));
    }
    return acc;
  }, []);
