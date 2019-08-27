const auth = require('../middleware/auth');
const controller = require('../controllers/user.controller')
const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/me', auth, controller.getMe);

router.post('/', controller.post);

module.exports = router;