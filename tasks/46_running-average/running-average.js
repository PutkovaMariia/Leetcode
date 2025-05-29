/**
 * Running average
 *
 * @return {Function}
 */

export const runningAverage = () => {
  const sum = [];
  return (num) => {
    sum.push(num);
    return sum.reduce((a, b) => a + b) / sum.length;
  };
};
