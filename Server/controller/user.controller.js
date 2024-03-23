const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
            return res.status(200).send({
                success: true,
                message: "User logged in successfully",
                data: {
                    user,
                    token
                }
            })
        } else {
            return res.status(401).send({
                success: false,
                message: 'Authentication failed. Invalid user or password.'
            })
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

const signUp = async (req, res) => {
    try {
        const isUserExist = await User.findOne({ email: req.body.email });
        if (isUserExist) {
            return res.status(400).send({
                success: false,
                message: "User already exists"
            });
        } else {
            const hashPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({ ...req.body, password: hashPassword });
            await newUser.save();
            return res.status(201).send({
                success: true,
                message: "User created successfully",
            })
        }
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { signIn, signUp }