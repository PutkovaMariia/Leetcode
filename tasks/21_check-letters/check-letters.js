/**
 * Check letters
 *
 * @param {Array<String>} arr
 * @return {Boolean}
 */

export const checkLetters = ([wordToCheck, wordToLookFor]) => {
  const lowerWordToCheck = wordToCheck.toLowerCase();
  return [...wordToLookFor.toLowerCase()].every((letter) => lowerWordToCheck.includes(letter));
};
