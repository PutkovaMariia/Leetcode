/**
 * Unite Unique
 *
 * @param {Array<Number>} input
 * @return {Array<Number>}
 */

export const uniteUnique = (...input) => [...new Set([...input.flat()])];
