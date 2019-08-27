const express = require('express');
const users = require('../routes/users.route');
const cigarettes = require('../routes/cigarettes.route');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/users', users);
    app.use('/api/cigarettes', cigarettes);
}