const express = require('express');
const { connection } = require('./connection/db');
require('dotenv').config()
const cors = require('cors')

let port = process.env.PORT
const app = express();
app.use(express.json());
app.use(cors())


app.get('/', (req, res) => {
    res.send("Server is running")
})

app.listen(port, async () => {
    try {
        await connection
        console.log(`Server is running on port ${port}`);
    } catch (error) {
        console.log(error);
    }
})