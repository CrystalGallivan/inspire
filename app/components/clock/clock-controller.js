import ClockService from "./clock-service.js";



//PRIVATE
let _clockService = new ClockService()

function _drawClock() {
  let clocks = _clockService.Clock
  document.getElementById('clock').innerHTML = `
  <h1>${clocks.unixtime}</h1>
  `
}

//PUBLIC
export default class ClockController {
  constructor() {
    _clockService.addSubscribers("clock", _drawClock)
    _clockService.getClock()
  }
}