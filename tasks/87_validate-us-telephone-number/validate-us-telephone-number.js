/**
 * Validate US Telephone Number
 *
 * @param {String} str
 * @return {Boolean}
 */

export const validateUSTelephoneNumber = (str) => /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/.test(str);
