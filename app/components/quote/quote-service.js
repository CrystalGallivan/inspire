import Quote from "../../models/quote.js";

// @ts-ignore
let _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: {}
}
let _subscriber = {
	quote: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscriber[prop].forEach(fn => fn());

}
export default class QuoteService {
	addSubscribers(prop, fn) {
		_subscriber[prop].push(fn)
	}
	get Quotes() {
		return _state.quote
	}

	getQuotes() {
		_quoteApi.get().then(res => {
			_setState('quote', new Quote(res.data.quote))
			console.log(res)
		})
			.catch(err => {
				console.error(err)
			})
	}
}

