const Todo = require('../models/todo');
const todoController = {};

todoController.index = (req, res) => {
  Todo.findAll()
  .then(todo=> {
    res.json({
      message: 'ok',
      data: todo,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

module.exports = todoController;
