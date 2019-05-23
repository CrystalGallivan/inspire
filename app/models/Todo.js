export default class ToDo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed || true
    this.user = data.user || true
    this.description = data.description
  }
  get Template() {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${}</li>
    <li class="list-group-item">${}</li>
    <li class="list-group-item">${}</li>
  </ul>
</div>
    `
  }
}