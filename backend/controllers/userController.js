const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@description Authenticat a user
//@route POst /api/users/login
//public
const loginUser = asyncHandler(async(req, res)=>{
const {email, password} = req.body

//check for user emial
const user = await User.findOne({email})

if(user && (await bcrypt.compare(password, user.password))){
    res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
    })
}else{
    res.status(400)
    throw new Error('invalid credetials')
}
})

//@description register new user
//@route POst /api/users
//public
const registerUser = asyncHandler(async (req, res)=>{

    const { name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('please add all fields')
    }
//check if the user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exist')
    }


    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name, 
        email,
        password: hashPassword 
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error('invalid user data')
    }

})

//@description get user data
//@route GET /api/users/me
//public
const getMe = asyncHandler(async(req, res)=>{
    res.json({
        message: 'user me info'
    })
})
module.exports = {
    registerUser,
    loginUser,
    getMe
}