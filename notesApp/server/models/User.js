const mongoose = require('mongoose');
const Schema= mongoose.Schema;
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
    }
});
const User = mongoose.model('User', UserSchema)
module.exports.User;