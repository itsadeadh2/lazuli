const { validate } = require('../models/session.model');
const { Cigarette } = require('../models/cigarette.model');
const { User } = require('../models/user.model');
const repository = require('../repository/session.repository');

exports.getAll = async (req, res, next) => {
    const sessions = await repository.getAll();
    res.send(sessions);
}

exports.post = async (req, res, next) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const cigarette = await Cigarette.findById(req.body.cigaretteId);
    if(!cigarette) return res.status(400).send({ message: 'Invalid cigarette.' });

    const user = await User.findById(req.body.userId);
    if(!user) return res.status(400).send({ message: 'Invalid user.' });
    
    let session = await repository.post({
        user: user._id,
        cigarette: {
            marca: cigarette.marca,
            valorCarteira: cigarette.valorCarteira,
            qtdCigarros: cigarette.qtdCigarros
        },
        numberOfCigarettes: req.body.numberOfCigarettes
    });

    res.send(session);
}

exports.getById = async (req, res, next) => {
    const session = repository.getById(req.params.id);
    if(!session) return res.status(404).send({ message: 'The session with the given id was not found.'});
    res.send(session);
}