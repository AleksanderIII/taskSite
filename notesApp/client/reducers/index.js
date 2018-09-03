import { combineReducers } from 'redux';
import note from './note.js';
import notesList from './notesList.js';
import modal from './modal.js';
import projectList from './projectsList.js';
import project from './project.js';
import usersList from './usersList.js';
import filter from './filter.js';
import user from './user.js';
import registerform from './registerform.js';
import signinform from './signinform.js';

export default combineReducers({
    note,
    notesList,
    modal,
    projectList,
    project,
    usersList,
    filter,
    registerform,
    user,
    signinform
})