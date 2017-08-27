const todoController = require ('../controllers/todo-controller');
const express = require('express');

const todoRoutes= express.Router();
todoRoutes.get('/', todoController.index)
