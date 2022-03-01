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
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Account creation has failed. Please try again."    
        })
    }
}

module.exports = {
    register,
}
