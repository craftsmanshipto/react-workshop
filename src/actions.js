var Reflux = require('reflux');

module.exports = {
  todoCompleted: Reflux.createAction(),
  todoUncompleted: Reflux.createAction(),
  createTodo: Reflux.createAction()
}
