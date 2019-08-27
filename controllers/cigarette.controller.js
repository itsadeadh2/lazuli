const repository = require('../repository/cigarettes.repository');
const { Cigarette, validate } = require('../models/cigarette.model');

exports.getAll = async (req, res, next) => {
    const cigarettes = await repository.getAll();
    res.send(cigarettes);
}

exports.getById = async (req, res, next) => {
    const cigarette = await repository.getById(req.params.id);
    if (!cigarette) return res.status(404).send({ message: 'The cigarette with the given id was not found.' });

    res.send(cigarette);
}

exports.post = async (req, res, next) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({message: error.details[0].message});
        
    cigarette = await repository.post({
        marca: req.body.marca,
        valorCarteira: req.body.valorCarteira,
        qtdCigarros: req.body.qtdCigarros
    });

    res.send(cigarette);
}

exports.put = async (req, res, next) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const cigarette = await repository.put({
        marca: req.body.marca,
        qtdCigarros: req.body.qtdCigarros,
        valorCarteira: req.body.valorCarteira
    }, req.params.id);
    
    if (!cigarette) return res.status(404).send({ message: 'The cigarette with the given id was not found.' })
    res.send(cigarette);
}

exports.delete = async (req, res, next) => {
    const cigarette = await repository.delete(req.params.id);    

    if (!cigarette) return res.status(404).send({message: 'The cigarette with the give id was not found'});
    
    res.send(cigarette);
}