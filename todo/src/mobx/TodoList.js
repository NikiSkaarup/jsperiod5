import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends React.Component {
  render() {
    const store = this.props.store;
    return (
      <div>
        <p>{store.report}</p>
        <form>
          <input type='text' ref={inp => this.newTodo = inp} />
          <button type='submit' onClick={this.onNewTodo}>New Todo</button>
        </form>
        <small> (double-click a todo to edit)</small>
        <ul className='todos'>
          {store.todos.map(
            (todo, idx) => <TodoView todo={todo} store={store} key={idx} />
          )}
        </ul>
      </div>
    );
  }

  onNewTodo = (e) => {
    e.preventDefault();
    this.props.store.addTodo(this.newTodo.value);
    this.newTodo.value = '';
  };
}

@observer
class TodoView extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={this.onRename}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={this.onToggleCompleted}
        />
        {todo.task}
        {todo.assignee
          ? <small>{todo.assignee.name}</small>
          : null
        }

      </li>
    );
  }

  onToggleCompleted = () => {
    this.props.store.toggleTodo(this.props.todo);
  };

  onRename = () => {
    let todo = this.props.todo;
    const newTask = prompt('Task name', todo.task) || todo.task;
    this.props.store.editTaskName(todo, newTask);
  };
}
