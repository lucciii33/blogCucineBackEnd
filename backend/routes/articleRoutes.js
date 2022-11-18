const express = require('express')
const router = express.Router()
const {getArticle, postArticle, editArticle, deleteArticle} = require('../controllers/articlesController')



router.route('/').get(getArticle).post(postArticle)
router.route('/:id').delete(deleteArticle).put(editArticle)
 

module.exports = router