const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    user: {
        type: new mongoose.Schema({ 
            name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
            },
            email: {
                type: String,
                required: true
            },
            dataCriacao: {
                type: Date,
                required: true
            }
        }),
        required: true
    },
    cigarette: {
        type: new mongoose.Schema({
            marca: {
                type: String,
                minlength: 3,
                required: true
            },
            valorCarteira: {
                type: Number,
                required: true
            },
            qtdCigarros: {
                type: Number,
                required: true
            }
        })
    },
    numberOfCigarettes: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }
})

const Session = mongoose.Model('Session', sessionSchema);

function validateSession(session) {
    const schema = {
        userId: Joi.objectId().required(),
        cigaretteId: Joi.objectId().required()
    };

    return Joi.validate(session, schema);
}

exports.Session = Session;
exports.validate = validateSession;