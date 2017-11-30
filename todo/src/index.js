import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './mobx/TodoList';
import observableTodoStore from './mobx/observableTodoStore';
import registerServiceWorker from './registerServiceWorker';
import ReduxTodo from './redux/indexRedux';
import {
  BrowserRouter as Router, Switch, Route, NavLink
} from 'react-router-dom';

const Info = () => (
  <div>
    <h2>Info</h2>
  </div>
);

const MobX = () => (<TodoList store={observableTodoStore} />);

const Main = () => (
  <Router>
    <div>
      <ul className='header'>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/mobx'>MobX</NavLink></li>
        <li><NavLink to='/redux'>Redux</NavLink></li>
      </ul>
      <Switch>
        <Route exact path='/' component={Info} />
        <Route path='/mobx' component={MobX} />
        <Route path='/redux' component={ReduxTodo} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
