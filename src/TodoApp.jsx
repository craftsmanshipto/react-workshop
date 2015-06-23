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

var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
        </header>
        <section className="main">
          <TodoList todos={todos} />
        </section>
        <footer>
        </footer>
      </div>
    );
  }
});

module.exports = TodoApp;
