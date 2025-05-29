/**
 * Buying a car
 *
 * @param {Number} oldCarValue
 * @param {Number} newCarPrice
 * @param {Number} savingPerMonth
 * @param {Number} startLossPercent
 * @return {Array<Number>}
 */

export function buyingCar(oldCarValue, newCarPrice, savingPerMonth, startLossPercent) {
  let months = 0;
  let savings = 0;
  let currentOldCarValue = oldCarValue;
  let currentNewCarPrice = newCarPrice;
  let lossPercent = startLossPercent;

  while (currentOldCarValue + savings < currentNewCarPrice) {
    months++;
    if (months % 2 === 0) {
      lossPercent += 0.5;
    }

    currentOldCarValue *= 1 - lossPercent / 100;
    currentNewCarPrice *= 1 - lossPercent / 100;
    savings += savingPerMonth;
  }

  return [months, Math.round(currentOldCarValue + savings - currentNewCarPrice)];
}
