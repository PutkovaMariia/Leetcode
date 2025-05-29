/**
 * Calculate Orbital Period
 *
 * @param {Array} arr
 * @return {Array}
 */

const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;
const DOUBLE_PI = 2 * Math.PI;

export const calculateOrbitalPeriod = (arr) =>
  arr.map(({ name, avgAlt }) => {
    const semiMajorAxis = EARTH_RADIUS + avgAlt;
    const orbitalPeriod = Math.round(DOUBLE_PI * Math.sqrt(semiMajorAxis ** 3 / GM));
    return { name, orbitalPeriod };
  });
