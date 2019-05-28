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
// let longEpoch = _state.currentTimeMillis(_state.timeunix) / 1000;
//PUBLIC
export default class ClockService {
  addSubscribers(prop, fn) {
    _subscriber[prop].push(fn)
  }
  get Clock() {
    return _state.clock
  }
  getCurrentDateTime() {
    debugger
    let currentDate = new Date(_state.clock * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = currentDate.getDate();
    let month = months[currentDate.getMonth()];
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let dateString = date + ' ' + month + ' ' + year + ' ' + hour + ' ' + minutes + ":" + seconds;
    console.log(dateString)
    return dateString
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
  getCurrentTime() {
    _clockApi.get().then(res => {


    })

  }
}