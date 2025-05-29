/**
 * Find friend
 *
 * @param {Array<String>} arr
 * @return {Number}
 */
const PRIMARY_COLOR = 'red';
const SECONDARY_COLOR = 'blue';

export const findFriend = (arr) =>
  arr.reduce((count, color, i) => {
    if (
      color === PRIMARY_COLOR &&
      ((arr[i - 1] === SECONDARY_COLOR && arr[i - 2] === SECONDARY_COLOR) ||
        (arr[i + 1] === SECONDARY_COLOR && arr[i + 2] === SECONDARY_COLOR) ||
        (arr[i - 1] === SECONDARY_COLOR && arr[i + 1] === SECONDARY_COLOR))
    ) {
      return count + 1;
    }
    return count;
  }, 0);
