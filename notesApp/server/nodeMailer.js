const nodemailer = require('nodemailer');

function postMail(adress){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alexllewton1991@gmail.com',
            pass: '6818792Explorer'
        }
    });

    const mailOptions = {
        from: 'alexllewton1991@gmail.com', 
        to: adress, 
        subject: 'Task tracker site - registration',
        html: '<p>This link helps to register. Please, follow <a href="http://localhost:8090/login">click me</a></p>'
    };


    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    });
}


module.exports = {
    postMail
};