/**
 * Expressions matter
 *
 * @param {Number} num1
 * @param {Number} num2
 * @param {Number} num3
 * @return {Number}
 */

export const expressionsMatter = (num1, num2, num3) => {
  const exp1 = num1 * (num2 + num3);
  const exp2 = num1 * num2 * num3;
  const exp3 = num1 + num2 * num3;
  const exp4 = (num1 + num2) * num3;
  const exp5 = num1 + num2 + num3;

  return Math.max(exp1, exp2, exp3, exp4, exp5);
};
