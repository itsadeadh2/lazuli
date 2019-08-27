const controller = require('../controllers/session.controller');
const express = require('express');
const router = express.Router();

// get all session
router.get('/', controller.getAll);

// post a session
router.post('/', controller.post)

// get a session by id
router.get('/:id', controller.getById)

module.exports = router;