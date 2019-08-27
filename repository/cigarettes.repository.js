const { Cigarette, validate } = require('../models/cigarette.model');

exports.getAll = async () => {    
    return await Cigarette.find().sort('marca');
}

exports.post = async (objCigarette) => {
    let cigarette = new Cigarette(objCigarette);
    return await cigarette.save();
}

exports.getById = async (id) => {
    return await Cigarette.findById(id);
}

exports.put = async (cigarette, id) => {
    return await Cigarette.findByIdAndUpdate(id, {
        marca: cigarette.marca,
        qtdCigarros: cigarette.qtdCigarros,
        valorCarteira: cigarette.valorCarteira
    }, { new: true });    
}

exports.delete = async (id) => {
    return await Cigarette.findByIdAndRemove(id);
}