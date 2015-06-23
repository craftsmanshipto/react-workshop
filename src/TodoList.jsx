var React = require('react');
var PropTypes = React.PropTypes;

var TodoList = React.createClass({
  propTypes: {
    todos: PropTypes.array.isRequired
  },

  render: function() {
    return <ul className="todo-list">{this._getTodoItems(this.props.todos)}</ul>;
  },

  _getTodoItems: function(todos) {
    return todos.map(this._getListItem);
  },

  _getListItem: function(todo) {
    return <TodoListItem key={todo.id} todo={todo} />;
  }
});

var TodoListItem = React.createClass({
  propTypes: {
    todo: PropTypes.object.isRequired
  },

  render: function() {
    var todo = this.props.todo;
    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{todo.content}</label>
          <button className="destroy" />
        </div>
      </li>
    );
  }
});

module.exports = TodoList;
