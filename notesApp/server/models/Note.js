const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NoteSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    text:[{
        type: String
    }],
    color:{
        type: String,
    },
    developer:{
        type: String,
        required: true
    },
    project:{
        type: String,
        required: true
    },
    status:{
        type: String
    },
    date:{
        type: Date,
    }
});
const Note = mongoose.model('Note', NoteSchema)
module.exports.Note;