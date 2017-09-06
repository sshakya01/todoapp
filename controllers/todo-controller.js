const Todo = require('../models/todo');
const todoController = {};

todoController.index = (req, res) => {
  Todo.findAll()
  .then(todos=> {
    //res.json({
    res.render('todos/index1',{
      message:'ok',
      data: todos,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

todoController.show = function(req, res){
  Todo.findById(req.params.id)
  .then(todos =>{
      res.render('todos/single',{
         message:'ok',
         data: todo,
      });
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
    res.redirect('/lists');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}
todoController.update = (req, res) => {
   Todo.update({
     title: req.body.title,
     status: req.body.status,
     category: req.body.category,
   }, req.params.id).then(todo => {
     res.redirect('/lists');
   }).catch(err => {
     console.log(err);
     res.status(500).json(err);
   })
};

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
