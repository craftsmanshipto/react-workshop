var React = require('react');

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

var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
        </header>
        <section className="main">
          <ul className="todo-list">
            { this._getTodoItems(todos) }
          </ul>
        </section>
        <footer>
        </footer>
      </div>
    );
  },

  _getTodoItems: function(items) {
    return items.map(this._getItem);
  },

  _getItem: function(item) {
    return (
      <li key={item.id}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{item.content}</label>
          <button className="destroy" />
        </div>
      </li>
    );
  }
});

module.exports = TodoApp;
