const { createTodo, getAllTodos, deleteTodo, updateTodo } = require('../controller/Todos.controller');
const { authenticateUser } = require('../middleware/auth.middleware');
const todosRouter = require('express')();




// todos
todosRouter.use(authenticateUser)
todosRouter.post('/create', createTodo)
    .get('/get', getAllTodos)
    .delete('/delete/:id', deleteTodo)
    .patch('/update/:id', updateTodo)



module.exports = todosRouter