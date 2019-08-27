const { User } = require('../models/user.model');

exports.getAll = async () => {
    return await User.find().sort('name');
}

exports.getById = async (id) => {
    return await User.findById(id).select('-password');
}

exports.post = async (objUser) => {
    let user = new User(objUser);
    await user.save();
    return await user.generateAuthToken();
}

exports.put = async (objUser, id) => {
    return await User.findByIdAndUpdate(id, {
        name: objUser.name,
        email: objUser.email                 
    }, { new: true });
}

exports.delete = async(id) => {
    return await User.findByIdAndRemove(id);
}

exports.getByEmail = async (email) => {
    return await User.findOne({ email: email })
}

