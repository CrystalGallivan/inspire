export default class ToDo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed || true
    this.user = data.user || true
    this.description = data.description
  }
  get Template() {
    return `
    	<li class="custom-control custom-checkbox">
					<input type="checkbox" onclick = 'app.controllers.todoController.toggleTodoStatus('${this._id}')' class="custom-control-input" id="todoId">
          <label class="custom-control-label"  for="customCheck1">${this.description}</label>
          <i class="fas fa-trash" onclick = "app.controllers.todoController.removeTodo('${this._id}')"> </i>
          </li>
   `
  }
}
