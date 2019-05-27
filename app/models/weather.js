export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.name
    this.kelvin = data.main.temp * 9 / 5 - 459.67
    // this.icon = data.weather.icon

  }
  get Template() {
    return `
  <div class="" id='weather-card'>
  <h6><i class="fas fa-cloud"></i> ${this.city}: ${this.kelvin.toFixed(0)}</h6></i></p>
  </div>
    `
  }
}