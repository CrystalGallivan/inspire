import Image from "../../models/image.js";

// @ts-ignore
let _imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});


let _state = {
	images: {}
}
let _subscriber = {
	images: []
}


function _setState(propName, data) {
	_state[propName] = data
	_subscriber[propName].forEach(fn => fn());
}
export default class ImageService {

	addSubscribers(propName, fn) {
		_subscriber[propName].push(fn)
	}

	get Images() {
		return _state.images
	}

	getImages() {
		_imgApi.get().then(res => {
			_setState('images', new Image(res.data))
			console.log(res)
		})
			.catch(err => {
				console.error(err)
			})
	}
}
