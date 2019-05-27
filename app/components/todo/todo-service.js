import ToDo from "../../models/Todo.js";

// @ts-ignore
let _todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/crystal/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	get Todos() {
		// return _state.todos
		return _state.todos.map(t => new ToDo(t))
	}

	getTodos() {
		_todoApi.get()
			.then(res => {
				// do something here
				let data = res.data.data.map(d => new ToDo(d))
				_setState('todos', data)
				console.log(res)
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		_todoApi.post('', todo)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		todo.completed = !todo.completed

		_todoApi.put(todoId, todo)
			.then(res => {
				this.getTodos()

			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		_todoApi.delete(todoId)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
		// The http method is delete at the todoId
	}

}
