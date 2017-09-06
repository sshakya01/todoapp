const todoController = require ('../controllers/todo-controller');
const express = require('express');
const todoRoutes= express.Router();

todoRoutes.get('/', todoController.index);
todoRoutes.post('/',todoController.create);

todoRoutes.get('/add', (req, res) => {
   res.render('todos/todos-add');
});
todoRoutes.put('/:id', todoController.update);
todoRoutes.get('/:id', todoController.show);
todoRoutes.delete('/:id', todoController.delete);
module.exports= todoRoutes;
