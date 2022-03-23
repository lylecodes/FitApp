const express = require('express');
// const { requireAuth } = require('express-openid-connect');

const postController = require('../controllers/postController');
const router = express.Router();

// GET request for a post content
router.get('/:id', postController.postItem);

// GET request to create post
router.get('/create', postController.postCreateGet);

// POST request to create post 
router.post('/create', postController.postCreatePost);

// GET request to delete post
router.get('/:id/delete', postController.postDeleteGet);

// POST request to delete post
router.post('/:id/delete', postController.postDeletePost);

// GET request to update post
router.get('/:id/update', postController.postUpdateGet);

// POST request to update post
router.post('/:id/update', postController.postUpdatePost);

// POST request to add comment to post
router.post('/:id/comment', postController.postUpdateComment);

module.exports = router;