/**
 * Equal Sides Of An Array
 *
 * @param {Array<Number>} arr
 * @return {Number}
 */

export const equalSides = (arr) => {
  if (!arr.length) {
    return 0;
  }

  let sumLeft = 0;
  let sumRight = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < arr.length; i++) {
    sumRight -= arr[i];
    if (sumLeft === sumRight) {
      return i;
    }
    sumLeft += arr[i];
  }

  return -1;
};
