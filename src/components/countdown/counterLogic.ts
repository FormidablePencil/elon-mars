export function timerCount(this: any, start: number, end: number) {
  const now = new Date().getTime();
  const distance = start - now;
  const passTime = end - now;

  if (distance < 0 && passTime < 0) {
    clearInterval(this.interval);
    return;
  } else if (distance < 0 && passTime > 0) {
    this.calcTime(passTime);
  } else if (distance > 0 && passTime > 0) {
    this.calcTime(distance);
  }
}

export function calcTime(this: any, time: any) {
  this.times[0].value = Math.floor(time / (1000 * 60 * 60 * 24) / 365);
  this.times[1].value = Math.floor(
    (time % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
  );
  this.times[2].value = Math.floor(
    (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  this.times[3].value = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  this.times[4].value = Math.floor((time % (1000 * 60)) / 1000);
}
