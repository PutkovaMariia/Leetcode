/**
 * is Prime?
 *
 * @param {Number} num
 * @return {Boolean}
 */

function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Minimum Number to Prime
 *
 * @param {Array<Number>} arr
 * @return {Number}
 */

export const minNumberToPrime = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  let temp = sum;
  while (!isPrime(temp)) {
    temp += 1;
  }
  return temp - sum;
};
