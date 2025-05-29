/**
 * Working hours
 *
 * @param {Array} arr
 * @return {Array}
 */

export const workingHours = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  const WEEK_ORDER = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  arr.sort((a, b) => WEEK_ORDER.indexOf(a.day) - WEEK_ORDER.indexOf(b.day));

  const result = [];
  let startDay = arr[0].day;
  let prev = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    const curr = arr[i];

    if (
      !curr ||
      curr.from !== prev.from ||
      curr.to !== prev.to ||
      WEEK_ORDER.indexOf(curr.day) !== WEEK_ORDER.indexOf(prev.day) + 1
    ) {
      if (startDay === prev.day) {
        result.push(`${startDay.toUpperCase()}: ${prev.from} - ${prev.to}`);
      } else {
        result.push(`${startDay.toUpperCase()} - ${prev.day.toUpperCase()}: ${prev.from} - ${prev.to}`);
      }

      if (curr) {
        startDay = curr.day;
      }
    }

    prev = curr;
  }

  return result;
};
