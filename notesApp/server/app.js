const express = require('express') ;
const parser = require('body-parser');
const dbMethods  = require('./utils/dataBaseUtils') ;
const CORS = require('cors');
const nodemailerObj = require('./nodeMailer.js');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const auth = require('./auth.js')

dbMethods.setUpConnection();

const app = express();
app.use(CORS());

app.use(parser.json());
app.use(cookieParser());
app.use(expressSession({ 
    secret: 'secret',
    saveUninitialized: false,
    resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/signin', passport.authenticate('local'), function (req, res, next) {
    dbMethods.FindUser(req.body.email)
        .then(data =>  res.send({email: data.email, name: data.name, lastName: data.lastName, role: data.role||'developer'}) )
})

app.get('/users', (req, res)=>{
    dbMethods.ListOfUsers().then(data=>res.send(data))
});

app.post('/users', (req, res)=>{
    dbMethods.createUser(req.body)
        .then(data=>dbMethods.ListOfUsers())
        .then(data=>res.send(data))
});

app.post('/register', (req, res)=>{   
    dbMethods.register(req)
        .then(data => dbMethods.ListOfUsers())
        .then(data => {nodemailerObj.postMail(req.body.email) ; return data})
        .then(data => res.send(data))
});

app.get('/verify',(req, res) => {
    nodemailerObj.mailVerifying(req, res)
})

app.delete('/users/:id', (req, res) => {
    dbMethods.deleteUser(req.params.id)
        .then(data=>dbMethods.ListOfUsers())
        .then(data=>res.send(data))
});

app.get('/projects', (req, res)=>{
    dbMethods.ListProjects().then(data=>res.send(data))
});

app.post('/projects', (req, res)=>{
    dbMethods.createProject(req.body)
        .then(data=>dbMethods.ListProjects())
        .then(data=>res.send(data))
});

app.delete('/projects/:id', (req, res)=>{
    dbMethods.deleteProject(req.params.id)
        .then(data=>dbMethods.ListProjects())
        .then(data=>res.send(data))
});

app.get('/notes', (req, res)=>{
    dbMethods.ListNotes().then(data=>res.send(data))
});

app.get('/note/:id', (req, res)=>{
    dbMethods.FindNote(req.params.id).then(data=>res.send(data))
});

app.post('/notes', (req, res)=>{
    dbMethods.createNote(req.body)
        .then(data=>dbMethods.ListNotes())
        .then(data=>res.send(data))
});

app.post('/notes/:id', (req, res)=>{
    dbMethods.updateNote(req.body)
        .then(data =>  dbMethods.ListNotes())
        .then(data => console.log(data, res.send(data)) )
});

app.delete('/notes/:id', (req, res)=>{
    dbMethods.deleteNote(req.params.id)
        .then(data=>dbMethods.ListNotes())
        .then(data=>res.send(data))
});

app.listen(process.env.PORT || 8080,()=>{
    console.log('i am listening')
})