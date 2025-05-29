/**
 * Return the correct string depending on the input
 *
 * @param {Number} par
 * @param {Number} strokes
 * @return {String}
 */

const conditions = [
  { condition: (par, strokes) => strokes === 1, message: 'Hole-in-one!' },
  { condition: (par, strokes) => strokes <= par - 2, message: 'Eagle' },
  { condition: (par, strokes) => strokes === par - 1, message: 'Birdie' },
  { condition: (par, strokes) => strokes === par, message: 'Par' },
  { condition: (par, strokes) => strokes === par + 1, message: 'Bogey' },
  { condition: (par, strokes) => strokes === par + 2, message: 'Double Bogey' },
  { condition: (par, strokes) => strokes >= par + 3, message: 'Go Home!' }
];

export function golfScore(par, strokes) {
  const result = conditions.find((c) => c.condition(par, strokes));
  return result ? result.message : 'Invalid input';
}
