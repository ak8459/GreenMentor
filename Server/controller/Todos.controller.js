const TodosModel = require('../models/TodosModel')



// get all todos

const getAllTodos = async (req, res) => {
    try {
        const todos = await TodosModel.find()
        res.status(200).send({
            success: true,
            message: "All todos fetched successfully",
            todos
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}


//create a todo
const createTodo = async (req, res) => {
    try {
        const newTodo = new TodosModel(req.body)
        await newTodo.save()
        res.status(200).send({
            success: true,
            message: "Todo created successfully",
            Todo: newTodo
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }

}

// delete a todo

const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await TodosModel.findByIdAndDelete(req.params.id)
        res.status(200).send({
            success: true,
            message: "Todo deleted successfully",
            Todo: deletedTodo
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

// upadate todo

const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await TodosModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).send({
            success: true,
            message: "Todo updated successfully",
            Todo: updatedTodo
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

module.exports = { createTodo, getAllTodos, deleteTodo ,updateTodo}
