/**
 * Pairwise
 *
 * @param {Array<Number>} arr
 * @param {Number} target
 * @return {Number}
 */

export const pairwise = (arr, target) => {
  let sumIndices = 0;
  const indexMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const complement = target - num;

    if (indexMap.has(complement) && indexMap.get(complement).length > 0) {
      const j = indexMap.get(complement).shift();
      sumIndices += i + j;
    } else {
      if (!indexMap.has(num)) {
        indexMap.set(num, []);
      }
      indexMap.get(num).push(i);
    }
  }

  return sumIndices;
};
