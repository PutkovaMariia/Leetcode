/**
 * People in bus
 *
 * @param {Array<Array<Number>>} arr
 * @return {Number}
 */

export const peopleInBus = (arr) =>
  arr.reduce((acc, [incomingPeople, exitingPeople]) => acc + incomingPeople - exitingPeople, 0);
