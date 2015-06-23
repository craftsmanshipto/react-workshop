var Reflux = require('reflux');
var actions = require('actions');

var _todos = {
  1: {
    id: 1,
    content: 'Step 1. Steal Underpants',
    complete: false
  },
  2: {
    id: 2,
    content: 'Step 2. ...',
    complete: false
  },
  3: {
    id: 3,
    content: 'Step 3. Profit.',
    complete: false
  }
};

var _nextId = 4;

function toArray(obj) {
  var arr = [];
  Object.keys(obj).forEach(function(key) {
    var item = obj[key];

    arr.push(item);
  });

  return arr;
}

var TodoStore = Reflux.createStore({
  init: function() {
    this.listenTo(actions.todoCompleted, this.onTodoCompleted);
    this.listenTo(actions.todoUncompleted, this.onTodoUncompleted);
    this.listenTo(actions.createTodo, this.onTodoCreate);

    this.todos = toArray(_todos);
  },

  getInitialState: function() {
    return toArray(_todos);
  },

  onTodoCreate: function(content) {
    var nextId = _nextId++;

    _todos[nextId] = {
      id: nextId,
      content: content,
      complete: false
    };

    this.todos = toArray(_todos);
    this.trigger(this.todos);
  },

  onTodoCompleted: function(id) {
    _todos[id].complete = true;

    this.todos = toArray(_todos);
    this.trigger(this.todos);
  },

  onTodoUncompleted: function(id) {
    _todos[id].complete = false;

    this.todos = toArray(_todos);
    this.trigger(this.todos);
  }
});

module.exports = TodoStore;
