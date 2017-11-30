import { observable, computed, action, useStrict } from 'mobx';
useStrict(true);
class ObservableTodoStore {
	@observable todos = [];

	@computed get completedTodosCount() {
		return this.todos.filter(
			todo => todo.completed === true
		).length;
	}

	@computed get report() {
		if (this.todos.length === 0)
			return `No todo's in store`;
		return `Next todo: '${this.todos[0].task}'. ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}
	@action
	toggleTodo(todo) {
		todo.completed = !todo.completed;
	}

	@action
	editTaskName(todo, taskName) {
		todo.task = taskName;
	}

	@action
	addTodo(task) {
		this.todos.push({
			task: task, completed: false, assignee: null
		});
	}
}

const observableTodoStore = new ObservableTodoStore();
export default observableTodoStore;
