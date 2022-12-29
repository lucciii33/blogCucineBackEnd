const express = require('express')
const path = require('path');
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
require("dotenv").config();
app.use(express.urlencoded({extended: false}))

app.use('/api/article', require('./routes/articleRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))