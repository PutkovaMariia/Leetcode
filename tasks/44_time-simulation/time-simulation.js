/**
 * Time simulation
 */

export class TimeSimulation {
  constructor() {
    this.time = 0;
    this.speed = 1;
    this.lastRealTime = 0;
  }

  get() {
    return this.time;
  }

  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }

  update(currentRealTime) {
    const deltaRealTime = currentRealTime - this.lastRealTime;
    this.time += deltaRealTime * this.speed;

    this.lastRealTime = currentRealTime;
  }
}
