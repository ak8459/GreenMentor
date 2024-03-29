const express = require('express');
const { connection } = require('./connection/db');
const todosRouter = require('./Routes/todos.route');
const userRouter = require('./Routes/user.route');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
require('dotenv').config()


let port = process.env.PORT
const app = express();


app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/todos', todosRouter)
app.use("/api", userRouter)


app.listen(port, async () => {
    try {
        await connection
        console.log(`Server is running on port ${port}`);
    } catch (error) {
        console.log(error);
    }
})