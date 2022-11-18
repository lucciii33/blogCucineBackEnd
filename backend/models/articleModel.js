const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    ingredients: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Article', articleSchema )