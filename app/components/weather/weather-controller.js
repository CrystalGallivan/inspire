import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function _drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	let weather = _weatherService.Weather
	document.getElementById("weather").innerHTML = weather.Template
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', _drawWeather)
		_weatherService.getWeather()
	}


}
