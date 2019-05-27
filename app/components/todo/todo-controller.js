import TodoService from "./todo-service.js";

// _todoService.addSubscriber('todos' _drawToDoForm)
let _todoService = new TodoService()
function _drawTodos() {
	//WHAT IS MY PURPOSE?
	let todos = _todoService.Todos
	let template = ``
	todos.forEach(todo => {
		template += todo.Template
	})
	document.getElementById('check-boxes').innerHTML = template
}
function _drawToDoForm() {
	document.getElementById('todos').innerHTML = `<form onsubmit="app.controllers.todoController.addTodo(event)">
					To do:
					<input type="text" name="description" value=description">
					<button class="btn" type="submit"><i
							class="fas fa-plus"></i></button>
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
		// Don't forget to add your subscriber
		_todoService.getTodos()
	}
	renderList() {
		_drawTodos();
		_drawToDoForm();
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			description: form.description.value
			// DONT FORGET TO BUILD YOUR TODO OBJECT
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
