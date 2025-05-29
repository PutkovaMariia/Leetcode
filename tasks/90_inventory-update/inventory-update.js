/**
 * Inventory Update
 *
 * @param {Array} arrCurrent
 * @param {Array} arrNew
 * @return {Array}
 */

export const updateInventory = (arrCurrent, arrNew) => {
  const result = new Map();
  arrCurrent.concat(arrNew).forEach(([count, item]) => {
    if (result.has(item)) {
      let curValue = result.get(item);
      curValue += count;
      result.set(item, curValue);
    } else {
      result.set(item, count);
    }
  });
  return [...result].sort((a, b) => a[0].localeCompare(b[0])).map(([item, count]) => [count, item]);
};
