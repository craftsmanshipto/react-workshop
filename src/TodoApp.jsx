var React = require('react');
var Reflux = require('reflux');

var actions = require('actions');

var TodoList = require('TodoList.jsx');

var TodoStore = require('TodoStore');

var ENTER_KEY = 13;

var TodoApp = React.createClass({
  getInitialState: function() { return {todos: []}; },
  mixins: [Reflux.ListenerMixin],
  componentDidMount: function() {
    this.listenTo(TodoStore, this._onTodoChange, this._todoInit);
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

  _todoInit: function(todos) {
    this.setState({todos: todos});
  },

  _onTodoChange: function(todos) {
    this.setState({todos: todos});
  },

  _handleNewTodoKeyDown: function(e) {
    if (e.keyCode !== ENTER_KEY) { return; }

    e.preventDefault();

    var val = e.target.value;

    actions.createTodo(val);

    e.target.value = "";
  }
});

module.exports = TodoApp;
