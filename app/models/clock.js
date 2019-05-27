export default class Clock {
  constructor(data) {
    this.datetime = data.datetime
    this.utc_datetime = data.utc_datetime
    this.unixtime = data.unixtime
  }
}