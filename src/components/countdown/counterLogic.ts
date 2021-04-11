export default function timerCount(start, end) {
  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now an the count down date
  const distance = start - now;
  const passTime = end - now;

  if (distance < 0 && passTime < 0) {
    this.message = this.wordString.expired;
    this.statusType = "expired";
    this.statusText = this.wordString.status.expired;
    clearInterval(this.interval);
    return;
  } else if (distance < 0 && passTime > 0) {
    this.calcTime(passTime);
    this.message = this.wordString.running;
    this.statusType = "running";
    this.statusText = this.wordString.status.running;
  } else if (distance > 0 && passTime > 0) {
    this.calcTime(distance);
    this.message = this.wordString.upcoming;
    this.statusType = "upcoming";
    this.statusText = this.wordString.status.upcoming;
  }
}
