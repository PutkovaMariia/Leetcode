/**
 * Convert HTML entities
 *
 * @param {String} str
 * @return {String}
 */

const htmlEntities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;'
};

export const convertHTMLEntities = (str) => str.replace(/[&<>"']/g, (char) => htmlEntities[char]);
