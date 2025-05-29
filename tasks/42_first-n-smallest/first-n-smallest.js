/**
 * N smallest elements in original order
 *
 * @param {Array<Number>} arr
 * @param {Number} num
 * @return {Array<Number>}
 */

export const firstNSmallest = (arr, num) => {
  const smallest = arr.reduce((acc, cur) => {
    if (acc.length < num) {
      acc.push(cur);
    } else {
      const maxSmallest = Math.max(...acc);
      if (cur < maxSmallest) {
        acc[acc.indexOf(maxSmallest)] = cur;
      }
    }
    return acc;
  }, []);

  return arr.filter((el) => smallest.includes(el)).slice(0, num);
};
