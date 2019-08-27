const { Session } = require('../models/session.model');

exports.getAll = async () => {
    return await Session.find().populate('user', '-password').sort('date');
}

exports.post = async (objSession) => {
    let session = new Session(objSession);
    return await session.save();
}

exports.getById = async (id) => {
    return await Session.findById(id).populate('user', '-password');
}