/**
 * Humanize format
 *
 * @param {Number} num
 * @param {Number} digitsAmount
 * @return {Number}
 */

const getDigits = (num, digitsAmount) => num % 10 ** digitsAmount;

/**
 * Humanize format
 *
 * @param {*} num
 * @return {String}
 */

export const humanizeFormat = (num) => {
  if (typeof num !== 'number' || num === 0) {
    return '';
  }

  const suffixes = ['th', 'st', 'nd', 'rd'];
  const lastTwoDigits = getDigits(num, 2);
  const lastDigit = getDigits(num, 1);

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  }

  return `${num}${suffixes[lastDigit] || suffixes[0]}`;
};
