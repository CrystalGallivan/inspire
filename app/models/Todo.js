export default class ToDo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed || true
    this.user = data.user || true
    this.description = data.description
  }
  get Template() {
    return `
    	<div class="custom-control custom-checkbox">
					<input type="checkbox" class="custom-control-input" id="customCheck1">
          <label class="custom-control-label" for="customCheck1">${this.description}</label>
          <i class="fas fa-trash"> </i>
          </div>
   `
  }
}
// onclick = "app.controllers.todoController.removeTodo()"


// {/* <button onclick/="app.controllers.todoController.removeTodo()"></button> */ }