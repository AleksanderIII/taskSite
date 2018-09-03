const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const bcrypt = require('bcrypt');
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String
    },
    password:{
        type: String,
    },
    role:{
        type: String
    },
    email:{
        type: String
    },
    verifyHash:{
        type: String
    },
    confirmed:{
        type: Boolean
    }
});

UserSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});
const User = mongoose.model('User', UserSchema)
module.exports.User;