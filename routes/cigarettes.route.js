const controller = require('../controllers/cigarette.controller');
const express = require('express');
const router = express.Router();

// get all cigarettes
router.get('/', controller.getAll);

// post a cigarette
router.post('/', controller.post);

// get a single cigarette
router.get('/:id', controller.getById);

// update a cigarette
router.put('/:id', controller.put);

// delete a cigarette
router.delete('/:id', controller.delete);

module.exports = router;

