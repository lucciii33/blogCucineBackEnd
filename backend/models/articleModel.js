const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    image: {
        type: String,
        require: false
    },
    title: {
        type: String,
        require: false
    },
    ingredients: {
        type: String,
        require: false
    },
    description: {
        type: String,
        require: false 
    }
})