const express = require('express') ;
const parser = require('body-parser');
const dbMethods  = require('./utils/dataBaseUtils') ;
const SERVER_PORT =  require('../etc/config.json').serverPort;
const CORS = require('cors');

dbMethods.setUpConnection();

const app = express();
app.use(CORS());
app.use(parser.json());

app.get('/users', (req, res)=>{
    dbMethods.ListOfUsers().then(data=>res.send(data))
});

app.post('/users', (req, res)=>{
    dbMethods.createUser(req.body)
        .then(data=>dbMethods.ListOfUsers())
        .then(data=>res.send(data))
});

app.post('/register', (req, res)=>{
    dbMethods.register(req.body)
        .then(data=>dbMethods.ListOfUsers())
        .then(data=>res.send(data))
});

app.delete('/users/:id', (req, res)=>{
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


let server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
let server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port||server_host||SERVER_PORT,()=>{
    console.log('i am listening')
})