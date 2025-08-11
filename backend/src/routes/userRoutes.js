// User routes
const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.get('/:id', getUserProfile);
router.put('/:id', protect, updateUserProfile);

module.exports = router;
