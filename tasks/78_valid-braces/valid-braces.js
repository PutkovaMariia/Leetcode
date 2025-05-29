/**
 * Valid Braces
 *
 * @param {String} str
 * @return {Boolean}
 */

const bracesPairs = {
  ')': '(',
  ']': '[',
  '}': '{'
};

export const validBraces = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    } else if (stack.pop() !== bracesPairs[char]) {
      return false;
    }
  }
  return stack.length === 0;
};
