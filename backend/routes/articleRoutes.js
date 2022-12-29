const express = require('express')
const router = express.Router()
const {getArticle, postArticle, editArticle, deleteArticle} = require('../controllers/articlesController')
const {protect} = require('../middleware/authMiddleware')



router.route('/').get(protect, getArticle).post(protect, postArticle)
router.route('/:id').delete(protect, deleteArticle).put(protect, editArticle)
 

module.exports = router