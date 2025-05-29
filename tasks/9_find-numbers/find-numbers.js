/**
 * Find a number in a string
 *
 * @param {*} input
 * @return {Array<Number>}
 */

export const findNumbers = (input) => (typeof input === 'string' ? input.match(/\d+/g).map(Number) : []);
