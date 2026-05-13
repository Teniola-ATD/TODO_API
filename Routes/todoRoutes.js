const express = require('express');
const router = express.Router();
const {
    getAllTodos, 
    createTodo, 
    updateTodo,
    getOneTodo, 
    deleteTodo} 
    = require('../controller/todoController');

    router.get('/todos', getAllTodos);
    router.get('/todos/:id', getOneTodo);
    router.post('/todos', createTodo);
    router.patch('/todos/:id', updateTodo);
    router.delete('/todos/:id', deleteTodo);

    module.exports = router;