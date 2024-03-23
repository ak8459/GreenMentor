const { signIn, signUp } = require('../controller/user.controller');
const userRouter = require('express')();



userRouter.post('/register', signUp)
    .post('/login', signIn)


module.exports = userRouter