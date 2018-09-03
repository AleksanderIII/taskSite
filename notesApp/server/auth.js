const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');
require('./models/User.js');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(  
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
        User.findOne({ email: email }).then(function(user) {
            if (!user) {
                return done(null, false, { message: 'Incorrect email or password.' });
            }
            bcrypt.compare(password, user.password, function(err, isMatch) {
                if (err){
                    console.log(`didn't match`);
                } else{
                    console.log('match');
                }
                
            });
            return done(null, user);
        });
    })
);

passport.serializeUser(function(user, done) {  
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {  
    User.loadOne({ _id: id }).then(function(user) {
        done(null, user);
    }).catch(function(err) {
        done(err, null);
    });
});

module.exports.passport