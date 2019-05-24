import ImageService from "./image-service.js";

let _is = new ImageService()


function _drawImg() {
  let img = _is.Images
  let template = ``
  document.getElementById('bg-image').style.backgroundImage = `url('${img.url}')`
}

export default class ImageController {
  constructor() {
    _is.addSubscribers('images', _drawImg)
    _is.getImages()
  }

}

