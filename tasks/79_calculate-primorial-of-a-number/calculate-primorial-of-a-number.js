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
 * Calculate Primorial Of a Number
 *
 * @param {Number} num
 * @return {Number}
 */

export const calculatePrimorialOfANumber = (num) => {
  let value = 1;
  let currentNumber = 2;
  let primeCount = 0;
  while (primeCount < num) {
    if (isPrime(currentNumber)) {
      value *= currentNumber;
      primeCount++;
    }
    currentNumber++;
  }
  return value;
};
