const { signIn, signUp } = require('../controller/user.controller');
const userRouter = require('express')();



userRouter.post('/signup', signUp)
    .post('/signin', signIn)


module.exports = userRouter