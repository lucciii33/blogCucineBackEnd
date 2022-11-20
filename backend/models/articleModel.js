const mongoose = require('mongoose')


const articleSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    ingredients: {
        type: Object,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Article', articleSchema )