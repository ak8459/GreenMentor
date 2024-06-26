const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    userId: {
        type: String,
    }
}, { versionKey: false })

module.exports = mongoose.model('Todos', TodosSchema)