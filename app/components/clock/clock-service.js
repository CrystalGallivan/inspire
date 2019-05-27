import Clock from "../../models/clock.js";


//PRIVATE
let _clockApi = axios.create({
  baseURL: 'http://worldtimeapi.org/api/timezone/MST'
})
// let utcSecs = 1234567890;
let _state = {
  clock: 1234567890
}
let _subscriber = {
  clock: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscriber[prop].forEach(fn => fn());
}

//PUBLIC
export default class ClockService {
  addSubscribers(prop, fn) {
    _subscriber[prop].push(fn)
  }
  get Clock() {
    return _state.clock
  }
  getClock() {
    _clockApi.get().then(res => {
      _setState('clock', new Clock(res.data))
      console.log(res)
    })
      .catch(err => {
        console.error(err)
      })
  }
}