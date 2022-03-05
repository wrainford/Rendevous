const bcrypt = require ("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models"); 

const register = async (req, res) => { 

    const userData = {
        userName: req.body.userName,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
    //default data to be added here

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(userData.password, salt);
        const user = await db.User.create({
            userName: userData.userName,
            name: userData.name,
            email: userData.email,
            password: hash,
        });
        await user.save();
        return res.status(200).json({
            status: 200,
            message: "Account successfully created. Rendevous away!"
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Account creation has failed. Please try again."    
        })
    }
}

const login = async (req, res) => {
    try {
        const foundUser = await db.User.findOne({email: req.body.email}).select("+password")

            if (!foundUser) {
                return res.status(400).json({
                    status: 400,
                    message: "Login credentials are incorrect. Please try again.",
                })
            }

        const isMatch = await bcrypt.compare(req.body.password, foundUser.password)
            if (isMatch) {
                const token = jwt.sign({_id: foundUser._id}, "rendevous", {
                    expiresIn: "3h"
                })
                return res.status(200).json({
                    status: 200,
                    message: "Login credentials are valid. Welcome to Rendevous.",
                    token,
                    foundUser
                })
            } else {
                return res.status(400).json({
                    status: 400,
                    message: "Login credentials are incorrect. Please try again.",
                })
            }
        } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Error. Please try again",
        })
    }   
}

module.exports = {
    register,
    login,
}
