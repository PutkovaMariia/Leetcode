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
 * Sum all primes numbers
 *
 * @param {Number} num
 * @return {Number}
 */

export function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
