export default class ToDo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed || true
    this.user = data.user || true
    this.description = data.description
  }
  get Template() {
    return `
    <tr>
      <th scope="row"><input type="checkbox" class="custom-control-input" id="customCheck1"></th>
      <td>${this.description}</td>
      <td><i class="fas fa-trash-alt" onclick="app.controllers.todoController.deleteToDo(event)"></i></td>
      <td></td>
    </tr>
   `
  }
}