import React, { Fragment } from 'react';
import './NotesEditor.css';
import ProjectList from './ProjectList.jsx';
import UsersList from './UsersList.jsx';
import { connect } from 'react-redux';
import ColorSelector from './ColorSelector.jsx';
import { changeNoteColor, changeNoteTitle, changeNoteText, changeNoteDeveloper, 
         createNote, getNotesList, changeNoteProject, changeNoteStatus } from '../actions'

class NoteEditor extends React.Component{
    constructor(){
        super();
        this.addNote = this.addNote.bind(this);
    }

    addNote(){
        this.props.onCreateNote(this.props.note)
    }
     
    render(){
        const user = JSON.parse(sessionStorage.getItem('user'));
        const userNameAndLName = JSON.parse(sessionStorage.getItem('user')).name +' '
            + JSON.parse(sessionStorage.getItem('user')).lastName;
        const userRole = user.role ;
        return(
            <div className = "MenuContainer">
                <ProjectList /> 
                <div className = "NotesEditor">
                    <input 
                        value = {this.props.note.title}
                        onChange = {e => this.props.onChangeNoteTitle(e.target.value)}
                        type = "text"
                        maxLength = "20"
                        placeholder = "Task title"
                    />
                    <label>
                        Project:
                    </label>
                    <select className="ProjectsList" onClick = {e => this.props.onChangeNoteProject(e.target.value)}>
                        {  
                            this.props.projectList.length>0?
                                this.props.projectList.map((elem, index)=>{
                                    return  <option key={index} value={elem.title}>{elem.title}</option>
                                }
                                    
                            ): <option disabled>Please, create new project</option>
                        }
                    </select>
                    
                    <label>
                        Developer:
                    </label>
                    <select onClick = {e => this.props.onChangeNoteDeveloper(e.target.value)}>
                        {  
                            userRole === 'developer'?
                            <option value={userNameAndLName}>
                                            {userNameAndLName}
                            </option>:
                            this.props.usersList.length>0?
                                this.props.usersList.map((elem, index)=>{
                                    return <option key={index} value={elem.name +' '+ elem.lastName}>
                                            {elem.name +' '+ elem.lastName}
                                        </option>
                                }
                                    
                            ): <option disabled>We don't have developers</option>
                        }
                    </select>
                    
                    <textarea  
                        value = {this.props.note.text}
                        onChange = {e => this.props.onChangeNoteText(e.target.value)}
                        rows = "5"
                        maxLength = "150"
                        placeholder = "Task text"
                    />
                    <select  className="StatusList" onClick = {e => this.props.onChangeNoteStatus(e.target.value)}>
                        <option value="waiting">waiting</option>
                        <option value="implementation">implementation</option>
                        <option value="verifying">verifying</option>
                        <option value="releasing">releasing</option>
                    </select>
                    <ColorSelector
                        selectedColor = {this.props.note.color} 
                        colorSelect = {this.props.onChangeNoteColor}
                    />
                    <button onClick = {this.addNote}>
                        Create task
                    </button>
                </div>  
                <UsersList /> 
            </div>
        )   
    }
}

export default connect(
    state => ({
        projectList: state.projectList,
        note: state.note,
        notesList: state.notesList,
        usersList: state.usersList
    }),
    dispatch =>({
        onChangeNoteColor:(note)=>{
            dispatch(changeNoteColor(note));
        },
        onChangeNoteTitle:(note)=>{
            dispatch(changeNoteTitle(note));
        },
        onChangeNoteText:(note)=>{
            dispatch(changeNoteText(note));
        },
        onChangeNoteDeveloper:(note)=>{
            dispatch(changeNoteDeveloper(note));
        },
        onCreateNote:(note)=>{
            dispatch(createNote(note));
        },
        onGetNotesList:()=>{
            dispatch(getNotesList());
        },
        onChangeNoteStatus:(note)=>{
            dispatch(changeNoteStatus(note));
        },
        onChangeNoteProject:(note)=>{
            dispatch(changeNoteProject(note));
        }
    })
)(NoteEditor)

