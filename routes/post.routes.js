const Router = require('express');
const router = new Router();
const postController = require('../controller/post.controller'); 

router.get('/post', postController.getPostByUser);
router.post('/post', postController.createPost);

module.exports = router;