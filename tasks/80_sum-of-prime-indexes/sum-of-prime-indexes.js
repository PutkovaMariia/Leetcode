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
 * Sum of prime-indexed elements
 *
 * @param {Array<Number>} arr
 * @return {Number}
 */

export function sumOfPrimeIndexes(arr) {
  let sum = 0;
  for (let i = 2; i <= arr.length - 1; i++) {
    if (isPrime(i)) {
      sum += arr[i];
    }
  }
  return sum;
}
