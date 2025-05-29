/**
 * Pig Latin
 *
 * @param {String} word
 * @return {String}
 */

export const pigLatin = (word) => {
  if (/^[aeiou]/.test(word)) {
    return `${word}way`;
  }
  const consonantCluster = word.match(/^[^aeiou]+/)?.[0] || '';
  return `${word.slice(consonantCluster.length)}${consonantCluster}ay`;
};
