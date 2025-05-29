/**
 * SMS Lottery Bet Validator
 *
 * @param {Array} amount, toNum
 * @param {String} str
 * @return {Array<number>}
 */

export const validateBet = ([amount, toNum], str) => {
  if (!/^[\d,\s]+$/.test(str)) {
    return null;
  }
  const numbers = str
    .split(/\s*,\s*|\s+/)
    .map(Number)
    .sort((a, b) => a - b);
  if (numbers.length !== amount || numbers[numbers.length - 1] > toNum || numbers.length !== new Set(numbers).size) {
    return null;
  }
  return numbers;
};
