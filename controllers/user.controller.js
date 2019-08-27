const repository = require('../repository/user.repository');
const bcrypt = require('bcrypt');
const { validate } = require('../models/user.model');
const _ = require('lodash');

exports.post = async (req, res, next) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await repository.getByEmail(req.body.email);
    if (user) return res.status(400).send('User already registered.');

    user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password        
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    const token = await repository.post(user);

    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email', 'dataCriacao']))

}

exports.getMe = async (req, res, next) => {
    const user  = await repository.getById(req.user._id);
    res.send(user);
}