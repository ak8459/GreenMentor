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
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,  Accept, x - client - key, x - client - token, x - client - secret, Authorization")
    next()
})

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
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