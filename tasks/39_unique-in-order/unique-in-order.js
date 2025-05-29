/**
 * Unique In Order
 *
 * @param {*} input
 * @return {Array}
 */

export const uniqueInOrder = (input) => {
  const arr = [...input];
  return arr.reduce((acc, _, index) => {
    if (arr[index] !== arr[index + 1]) {
      acc.push(arr[index]);
    }
    return acc;
  }, []);
};
