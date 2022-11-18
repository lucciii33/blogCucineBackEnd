const asyncHandler = require('express-async-handler')


//@description get articles
//@route GET /api/articles
//private
const getArticle = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'get article'  })
})

//@description post articles
//@route POST /api/articles
//private
const postArticle = asyncHandler(async(req, res) => {
   if(!req.body.text){
    res.status(400)
   throw new Error('please add the text field') 
   }
    res.status(200).json({ message: 'post article'  })
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