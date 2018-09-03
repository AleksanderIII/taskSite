const nodemailer = require('nodemailer');
const authData = require('./config.json').user;
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = mongoose.model('User');
require('./models/User.js');
const host = require("./config.json").host;
const PORT = require("./config.json").PORT;


function postMail(adress){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: authData.email,
            pass: authData.password
        }
    });

    const randomNumber = Math.floor(Math.random()*1000);
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(randomNumber.toString(), salt);
    const link = "http://" + host + "/verify?id=" + hash;

    User.findOneAndUpdate({email: adress}, { $set: { verifyHash: hash }}, { new: true }, (err, user) => {
    } );
    
    const mailOptions = {
        from: 'alexllewton1991@gmail.com', 
        to: adress, 
        subject: 'Task tracker - registration',
        html: `<p>This link helps to register. Please, follow <a href = ${link}>click me</a></p>`
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            //    console.log(err)
        }
        
        else{
            //   console.log(info);
        }
         
    });
}


function mailVerifying(req, res){
    if ((req.protocol + "://" + req.host+':'+PORT) == ("http://" + host)) {
        User.findOneAndUpdate({verifyHash: req.query.id}, { $set: { confirmed: true }}, { new: true }, (err, user) => {
            if(err){
                res.end("<h1 style=margin-top:200px;margin-left:200px;>Please enter your email again </h1>");
            }else{
                res.end("<h1 style=margin-top:200px;margin-left:200px;>Email is been Successfully verified <a href='http://localhost:8090/signin'>Go to site</a>");
            }
        } );
    } else {
        res.end("<h1>Request is from unknown source</h1>");
    }
}


module.exports = {
    postMail,
    mailVerifying
};