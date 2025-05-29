/**
 * Seek and destroy
 *
 * @param {Array} arr
 * @param {*} args
 * @return {Array}
 */
export const destroyer = (arr, ...args) => arr.filter((item) => !args.includes(item));
