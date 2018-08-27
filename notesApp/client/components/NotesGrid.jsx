import React, { Fragment } from 'react';
import './NotesGrid.css';
import { connect } from 'react-redux';
import Note from './Note.jsx';
import Filter from './Filter.jsx';
import { getNotesList, deleteNote, getNote, filterByProject, filterByDeveloper } from '../actions/index.js'
import ModalWindow from './ModalWindow.jsx';




class NotesGrid extends React.Component{
    constructor(){
        super()
        this.deleteNote = this.deleteNote.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    
    componentDidMount(){
        this.props.onGetNotesList();
    }

    deleteNote(id){
        this.props.onDeleteNote(id);
    }

    componentWillUpdate(){
        console.log('i am update');
    }

    toggleModal(id){
        this.props.onGetNote(id);
    }
    
    render(){   
        let developerFilter = this.props.filter.byDeveloper;
        let projectFilter = this.props.filter.byProject;
        let notesList = this.props.notesList;
        let notesAfterDeveloperFilter = developerFilter !== 'All' ? notesList.filter(elem=>elem.developer === developerFilter): notesList;
        let notesAfterProjectFilter = projectFilter !== 'All' ? notesAfterDeveloperFilter.filter(elem=>elem.project === projectFilter): notesAfterDeveloperFilter;
        return(
                <div className = "content">
                    <h2>Tasks</h2>
                    <Filter 
                        filterByProject = {this.props.onFilterByProject}
                        filterByDeveloper = {this.props.onFilterByDeveloper}  
                    />
                    {   
                        
                        notesAfterProjectFilter.length > 0 ?
                        <div className = "NotesGrid">
                            {   
                                notesAfterProjectFilter.map((element, index) =>
                                    <Note key = {index}
                                        note ={element} 
                                        deleteNote = {this.deleteNote} 
                                        openNote = {this.toggleModal}
                                    />
                                )
                            }
                        </div >  : <div>
                            <h3>We don't have tasks</h3>
                        </div>
                        
                    }
                    {this.props.modal._id? <ModalWindow modalDate = {this.props.modal} /> :null}
                </div>
        )
    }
}


export default connect(
    state => ({
        notesList: state.notesList,
        modal: state.modal,
        filter: state.filter
    }),
    dispatch =>({
        onGetNotesList:()=>{
            dispatch(getNotesList());
        },
        onDeleteNote:(id)=>{
            dispatch(deleteNote(id))
        },
        onGetNote:(id)=>{
            dispatch(getNote(id));
        },
        onFilterByProject:(project)=>{
            dispatch(filterByProject(project));
        },
        onFilterByDeveloper:(developer)=>{
            dispatch(filterByDeveloper(developer));
        }
    })
)(NotesGrid)


