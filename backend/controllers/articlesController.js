const asyncHandler = require('express-async-handler')
const Article = require('../models/articleModel')

//@description get articles
//@route GET /api/articles
//private
const getArticle = asyncHandler(async(req, res) => {
const article = await Article.find()

    res.status(200).json(article)
})

//@description post articles
//@route POST /api/articles
//private
const postArticle = asyncHandler(async(req, res) => {
    const data = req.body
   if(!data.image|| !data.title || !data.ingredients || !data.description){
    res.status(400)
   throw new Error('something is wrong') 
   }

   const createArticle = await Article.create({
    image: data.image,
    title: data.title,
    ingredients: data.ingredients,
    description: data.description
   })
    res.status(200).json(createArticle)
})

//@description post articles
//@route PUT /api/articles/:id
//private
const editArticle = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `update article ${req.params.id}`  })
})

//@description post articles
//@route DELETE /api/articles/:id
//private
const deleteArticle = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `delete article ${req.params.id}`  })
})




module.exports = {
    getArticle,
    postArticle,
    editArticle,
    deleteArticle
}