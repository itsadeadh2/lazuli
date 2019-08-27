const Joi = require('joi');
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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

const Session = mongoose.model('Session', sessionSchema);

function validateSession(session) {
    const schema = {
        userId: Joi.objectId().required(),
        cigaretteId: Joi.objectId().required(),
        numberOfCigarettes: Joi.number().required()
    };

    return Joi.validate(session, schema);
}

exports.Session = Session;
exports.validate = validateSession;