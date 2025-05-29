/**
 * Follow that Spy
 *
 * @param {Array<Array<String>>} arr
 * @return {String}
 */

export const followTheSpy = (arr) => {
  const routeMap = new Map(arr);

  const allDestinations = new Set(arr.map(([, destination]) => destination));
  const start = arr.find(([source]) => !allDestinations.has(source))[0];

  const journey = [];
  let current = start;

  while (current) {
    journey.push(current);
    current = routeMap.get(current);
  }

  return journey.join(', ');
};
