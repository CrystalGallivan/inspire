import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function _drawQuote() {
  let quotes = _qs.Quotes
  document.getElementById('quote').innerHTML = `
  <div class="card">
  <div class="card-header">
    Quote of the Day
  </div>
  <div class="card-body">
  <p class="card-text">${quotes.body}</p>
  <h10 class="card-title"><b>${quotes.author}</b></h10>
  </div>
</div>
  `
}
export default class QuoteController {
  constructor() {
    _qs.addSubscribers('quote', _drawQuote)
    _qs.getQuotes()

  }

}
