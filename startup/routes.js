const express = require('express');
const users = require('../routes/users.route');
const cigarettes = require('../routes/cigarettes.route');
const sessions = require('../routes/session.route');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/users', users);
    app.use('/api/cigarettes', cigarettes);
    app.use('/api/sessions', sessions);
}