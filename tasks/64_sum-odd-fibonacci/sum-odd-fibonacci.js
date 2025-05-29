/**
 * Sum All Odd Fibonacci Numbers
 *
 * @param {Number} num
 * @return {Number}
 */

export const sumOddFibonacci = (num) => {
  let [fib1, fib2, sum] = [1, 1, 0];

  while (fib1 <= num) {
    if (fib1 % 2 !== 0) {
      sum += fib1;
    }
    [fib1, fib2] = [fib2, fib1 + fib2];
  }

  return sum;
};
