const express = require('express');
// const { requireAuth } = require('express-openid-connect');

const mediaController = require('../controllers/mediaController');
const router = express.Router();

// GET request for a media content
router.get('/:id', mediaController.mediaItem);

// GET request to create media
router.get('/create', mediaController.mediaCreateGet);

// POST request to create media 
router.post('/create', mediaController.mediaCreatePost);

// GET request to delete media
router.get('/:id/delete', mediaController.mediaDeleteGet)

// POST request to delete media
router.post('/:id/delete', mediaController.mediaDeletePost)

// GET request to update media
router.get('/:id/update', mediaController.mediaUpdateGet)

// POST request to update media
router.post('/:id/update', mediaController.mediaUpdatePost)

module.exports = router;