const express = require('express');
const { connection } = require('./connection/db');
const todosRouter = require('./Routes/todos.route');
const userRouter = require('./Routes/user.route');
require('dotenv').config()
const cors = require('cors')

let port = process.env.PORT
const app = express();
app.use(express.json());
app.use(cors())


app.use('/todos', todosRouter)
app.use("/auth", userRouter)


app.listen(port, async () => {
    try {
        await connection
        console.log(`Server is running on port ${port}`);
    } catch (error) {
        console.log(error);
    }
})