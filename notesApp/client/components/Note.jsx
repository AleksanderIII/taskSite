import React from 'react';
import './Note.css'

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const Note = (props) => {
    return  <div className = "Note" style = {{background : props.note.color}}>
                <div className="Note_control">
                    <span onClick = {e => props.openNote(props.note._id)}><b>&#9776;</b></span>
                    <span onClick = {e => props.deleteNote(props.note._id)} >
                        <b>&#10007;</b>
                    </span>
                </div>     
                <h3>Task name: {props.note.title}</h3>
                <h3>Project: {props.note.project}</h3>
                <p className = "Note_comment">Comment: { props.note.text.length > 1 ? props.note.text[0]+'...' :props.note.text[0]}</p>
                <p>Status: {props.note.status}</p>
                <p>Responsible for implementation: {props.note.developer}</p>
                <p className ="Note_date">Creation date: {new Date(props.note.date).toLocaleString('en-us', options)}</p>
            </div>
}

export default Note



                                    
                           