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
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">${this.city}</div>
  <div class="card-body">
    <h5 class="card-title">Current Tempurature is:</h5>
    <p class="card-text">${this.kelvin.toFixed(0)}</p>
  </div>
</div>
    `
  }
}