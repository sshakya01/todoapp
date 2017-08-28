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

todoController.show = function(req, res){
  Todo.findOne(req.params.id)
  .then(todo=>{
    res.json({
      message:'ok',
      data: list,
    })
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

todoController.create = function(req, res){
  Todo.create({
    title: req.body.title,
    status: req.body.status,
    category: req.body.category
  })
  .then(list=> {
    res.json({
      message:'ok',
      data:list,
    })
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

todoController.delete = function(req, res){
  Todo.destroy(req.params.id)
  .then(()=>{
    res.redirect('/lists');
  }). catch(err => {
    console.log(err);
  res.status(500).json(err);
  })
}

module.exports = todoController;
