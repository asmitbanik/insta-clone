// Post routes
const express = require('express');
const router = express.Router();
const { createPost, getPosts, likePost, commentOnPost } = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createPost);
router.get('/', getPosts);
router.post('/:id/like', protect, likePost);
router.post('/:id/comment', protect, commentOnPost);

module.exports = router;
