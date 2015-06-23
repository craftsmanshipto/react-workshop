var React = require('react');

var TodoList = require('TodoList.jsx');

var todos = [
  {
    id: 1,
    content: 'Step 1. Steal Underpants',
    complete: false
  },
  {
    id: 2,
    content: 'Step 2. ...',
    complete: false
  },
  {
    id: 3,
    content: 'Step 3. Profit.',
    complete: false
  }
];

var _nextId = 4;

var ENTER_KEY = 13;

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: todos
    };
  },

  render: function() {
    var todos = this.state.todos;
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <input id='new-todo' className="new-todo" placeholder="What needs to be done?" onKeyDown={this._handleNewTodoKeyDown} />
        </header>
        <section className="main">
          <TodoList todos={todos} />
        </section>
        <footer>
        </footer>
      </div>
    );
  },

  _handleNewTodoKeyDown: function(e) {
    if (e.keyCode !== ENTER_KEY) { return; }

    e.preventDefault();

    var val = e.target.value;
    if (val) {
      var todos = this.state.todos;
      todos.push({
        id: _nextId++,
        content: val,
        complete: false
      });
      this.setState({todos: todos});
    }
    e.target.value = "";
  }
});

module.exports = TodoApp;
