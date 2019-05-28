import TodoService from "./todo-service.js";

let _todoService = new TodoService()
function _drawTodos() {
	let todos = _todoService.Todos
	let template = ``
	todos.forEach(todo => {
		template += todo.Template
	})
	document.getElementById('check-boxes').innerHTML = template
}
function _drawToDoForm() {
	document.getElementById('todos').innerHTML = `<form onsubmit="app.controllers.todoController.addTodo(event)">
	<h1>To do:</h1>
	<input type="text" name="description" value="description">
	<button class="btn" type="submit"><i
	class="fas fa-1x fa-plus" style="color: white; d-flex; justify-content:center; align-content:center;"></i></button>
	</form>
	
	`
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawToDoForm)

		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			description: form.description.value

		}

		_todoService.addTodo(todo)
		form.reset()
	}

	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
	}



}
