const { Session, validate } = require('../models/session.model');
const { Cigarette } = require('../models/cigarette.model');
const { User } = require('../models/user.model');
const express = require('express');

// get all session
router.get('/', async (req, res) => {
    const sessions = await Session.find().sort('-date');
    res.send(sessions);
});

// post a session
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const cigarette = await Cigarette.findById(req.body.cigaretteId);
    if(!cigarette) return res.status(400).send({ message: 'Invalid cigarette.' });

    const user = await User.findById(req.body.)
})