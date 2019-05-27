export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp * 9 / 5 - 459.67
  }
  get Template() {
    return `
  <div class="card" id='weather-card'>
  <h3>${this.city}</h3>
  <div class="card-body">
    <h5>Current Temperature is:</h5>
    <p>${this.kelvin.toFixed(0)}</p>
  </div>
  </div>
    `
  }
}