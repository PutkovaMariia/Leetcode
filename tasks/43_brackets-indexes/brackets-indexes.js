/**
 * Brackets indexes
 *
 * @param {String} str
 * @param {Number} num
 * @return {Number}
 */

export const bracketsIndexes = (str, num) => {
  const arr = str.split('');
  let index = -1;
  let openCount = 0;

  if (arr[num] !== '(') {
    return -1;
  }

  for (let i = num; i < arr.length; i++) {
    if (arr[i] === '(') {
      openCount++;
    } else if (arr[i] === ')') {
      openCount--;
      if (openCount === 0) {
        index = i;
        return index;
      }
    }
  }

  return index;
};
