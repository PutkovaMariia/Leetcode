/**
 * Row Weight
 *
 * @param {Array<Number>} arr
 * @return {Array<Number>}
 */

export const rowWeights = (arr) =>
  arr.reduce(([team1, team2], cur, index) => (index % 2 === 0 ? [team1 + cur, team2] : [team1, team2 + cur]), [0, 0]);
