export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
    this._id = data._id
  }
}