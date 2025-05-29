/**
 * Bouncing Balls
 *
 * @param {Number} height
 * @param {Number} bounce
 * @param {Number} window
 * @return {Number}
 */

export function bouncingBalls(height, bounce, window) {
  if (height <= 0 || bounce <= 0 || bounce >= 1 || window >= height) {
    return -1;
  }

  let times = 1;
  let currentHeight = height * bounce;

  while (currentHeight > window) {
    times += 2;
    currentHeight *= bounce;
  }

  return times;
}
