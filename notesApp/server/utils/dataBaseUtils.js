const mongoose = require('mongoose');
require('../models/Note');
require('../models/Project');
require('../models/User');
const Note = mongoose.model('Note');
const Project = mongoose.model('Project');
const User = mongoose.model('User');
const dbPath = require("../config.json").dbPath;

function setUpConnection(){
    mongoose.connect(dbPath, { useNewUrlParser: true });
}

function ListOfUsers(){
    return User.find();
}

function FindUser(email){
    return User.findOne({email});
}

function register(data) { 
    const user = User({
        name: data.body.name,
        lastName: data.body.lastName,
        email: data.body.email,
        password: data.body.password,
        confirmed: false
    }); 
    return user.save();
}

function createUser(data) { 
    const user = User({
        name: data.name,
        lastName: data.lastName,
        role: data.role
    });
    return user.save();
}

function ListProjects(){
    return Project.find();
}

function deleteUser(id){
    return User.findById(id).remove();
}

function createProject(data) { 
    const project = Project({
        title: data.title
    });
    return project.save();
}

function deleteProject(id) {  
    return Project.findById(id).remove();
}

function ListNotes(){
    return Note.find();
}

function FindNote(id){
    return Note.findById(id);
}

function createNote(data) {  
    const note = Note({
        title: data.title,
        text: data.text,
        color: data.color,
        developer: data.developer,
        project: data.project,
        status: data.status,
        date: new Date()
    });
    return note.save();
}

function updateNote(data) {
    return  Note.findById(data._id, (err, note) => {
        note.text = data.text;  
        note.status = data.status;  
        note.save();
    } );
}

function deleteNote(id) {  
    return Note.findById(id).remove();
}

module.exports = {
    setUpConnection,
    ListNotes,
    createNote,
    deleteNote,
    FindNote,
    ListProjects,
    createProject,
    deleteProject,
    ListOfUsers,
    createUser,
    updateNote,
    deleteUser,
    register,
    FindUser
}