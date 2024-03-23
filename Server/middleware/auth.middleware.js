const jwt = require('jsonwebtoken')
const authenticateUser = (req, res, next) => {
    const authCookie = req.cookies.token;
    try {
        jwt.verify(authCookie, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: 'Authentication failed. Please login.'
                })
            } else {
                req.body.userId = user.userId
                next()
            }
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        })
    }

}


module.exports = { authenticateUser }