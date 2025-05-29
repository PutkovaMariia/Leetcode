/**
 * Convert from Celsius to Fahrenheit
 *
 * @param {Number} celsius
 * @return {Number}
 */
const MULTIPLIER = 9 / 5;
const OFFSET = 32;

export const convertToF = (celsius) => celsius * MULTIPLIER + OFFSET;
