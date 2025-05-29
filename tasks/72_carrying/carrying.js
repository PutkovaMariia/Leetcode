/**
 * Carrying
 *
 * @param {Number} num1
 * @return {*}
 */

export const carrying = (...num1) => {
  if (num1.length === 1 && typeof num1[0] === 'number') {
    return (num2) => (typeof num2 === 'number' ? num1[0] + num2 : undefined);
  }

  if (num1.length === 2 && num1.every((n) => typeof n === 'number')) {
    return num1[0] + num1[1];
  }

  return undefined;
};
