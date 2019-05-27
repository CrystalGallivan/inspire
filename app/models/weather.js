export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.kelvin = data.main.temp * 9 / 5 - 459.67
    // this.icon = data.weather.icon

  }
  get Template() {
    return `
  <div class="card" id='weather-card'>
  <h3><i class="fas fa-cloud"></i> ${this.city}</h3>
  <div class="card-body">
    <h5>Temperature:</h5>
    <p><h2> ${this.kelvin.toFixed(0)}</h2></i></p>
  </div>
  </div>
    `
  }
}