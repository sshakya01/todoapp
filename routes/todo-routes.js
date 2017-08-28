const todoController = require ('../controllers/todo-controller');
const express = require('express');

const todoRoutes= express.Router();

todoRoutes.get('/', todoController.index);

todoRoutes.get('/:id',todoController.show);

todoRoutes.post('/',todoController.create);

todoRoutes.delete('/:id', todoController.delete);

module.exports= todoRoutes;
