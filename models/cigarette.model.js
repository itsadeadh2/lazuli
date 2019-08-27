const Joi = require('joi');
const mongoose = require('mongoose');

const cigaretteSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    valorCarteira: {
        type: Number,
        required: true
    },
    qtdCigarros: {
        type: Number,
        required: true,
        default: 20
    }
})

const Cigarette = mongoose.model('Cigarette', cigaretteSchema);

function validateCigarette(cigarette) {
    const schema = {
        marca: Joi.string().min(3).max(50).required(),
        valorCarteira: Joi.number().required()
    }

    return Joi.validate(cigarette);
}

exports.Cigarette = Cigarette;
exports.validate = validateCigarette;