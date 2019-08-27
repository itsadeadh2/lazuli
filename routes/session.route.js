const controller = require('../controllers/session.controller');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// get all session
router.get('/', auth, controller.getAll);

// post a session
router.post('/', auth, controller.post)

// get a session by id
router.get('/:id', auth, controller.getById)

module.exports = router;