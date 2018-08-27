import React from 'react';
import './ModalWindow.css';
import { clearForm, deleteComment, newCommentChange, addComment, toggleStatusSelection,
         changeStatus, postNoteChanges, editOneComment, commentEditioning, commentEdited } from '../actions/index.js';
import { connect } from 'react-redux';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class ModalWindow extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.closeWindow = this.closeWindow.bind(this);
    }

    closeWindow(elem){
        if(elem.className === "Modal_background"){
           this.props.onClearForm(); 
        }
        
    }


    render(){
        return(
            this.props.modalDate.color?
                <div className = "Modal_background" onClick={e => {this.closeWindow(e.target)}}>
                    <div className = "Modal" style = {{background : this.props.modalDate.color}}>    
                        <h3>Project: {this.props.modalDate.project}</h3>
                        <h3>Task name: {this.props.modalDate.title}</h3>
                        <div className = "Modal_edit">
                            <p> Comments: </p> 
                            {this.props.modalDate.text.map((elem, index)=><p 
                                key = {index} 
                                className = "Modal_edit_comment"> 
                                {elem} 
                                <span 
                                    id = {index} 
                                    className = "DeleteComment"
                                    onClick = {e => this.props.onDeleteComment(e.target.id)}
                                > 
                                    &#10008; 
                                </span>
                                <span id = {index} 
                                    className = "EditComment"
                                    onClick = {e => this.props.onEditOneComment(index)}
                                >
                                    &#9998; 
                                </span> 
                            </p>
                            )}
                            {
                            this.props.modal.showInputCommentEditor&&<p>
                                Change comment: {this.props.modal.text[this.props.modal.editableComment] }
                            <input 
                                type="text"
                                className = "newComment"  
                                placeholder = {this.props.modal.text[this.props.modal.editableComment] }
                                onChange = {e => this.props.onCommentEditioning(e.target.value)}
                                value = {this.props.editedCommentValue} 
                            /><span onClick = {e => this.props.onCommentEdited()}>&#10004;</span></p>
                            }
                            <input 
                                value = {this.props.modal.newComment}
                                type = "text" 
                                className = "newComment"
                                onChange = {e => this.props.onNewCommentChange(e.target.value)}
                                placeholder = {'New comment'}
                            />
                            <span onClick = {e => this.props.onAddComment(this.props.modal.newComment)}>&#10004;</span>
                        </div>

                        <p  className = "Modal_edit_status">
                            Status: {this.props.modalDate.status}
                            <span onClick = {this.props.onToggleStatusSelection}> &#9998;</span>
                        </p>
                        {
                        this.props.modal.showStatusSelection&&<p>
                            Change status to: 
                            <select onChange = {e => this.props.onChangeStatus(e.target.value)}>
                                <option value="waiting">waiting</option>
                                <option value="implementation">implementation</option>
                                <option value="verifying">verifying</option>
                                <option value="releasing">releasing</option>
                            </select>
                        </p>  
                        }
                        
                        
                        <p>Responsible for implementation: {this.props.modalDate.developer}</p>
                        <p className = "Modal_date"> Creation date: {new Date(this.props.modalDate.date).toLocaleString('en-us', options)}</p>
                        <span className = "Modal_save" onClick = {e => this.props.onPostNoteChanges(this.props.modal)}>&#10004;</span>
                    </div>
                </div>
            :null
        )
    }
}





export default connect(
    state => ({
        modal: state.modal,
        note: state.note
    }),
    dispatch =>({
        onClearForm:()=>{
            dispatch(clearForm());
        },
        onDeleteComment:(comment)=>{
            dispatch(deleteComment(comment));
        },
        onNewCommentChange:(comment)=>{
            dispatch(newCommentChange(comment))
        },
        onToggleStatusSelection:()=>{
            dispatch(toggleStatusSelection())
        },
        onAddComment:(comment)=>{
            dispatch(addComment(comment))
        },
        onChangeStatus:(status) => {
            dispatch(changeStatus(status))
        },
        onPostNoteChanges:(note)=>{
            dispatch(postNoteChanges(note))
        },
        onEditOneComment:(commentId) => {
            dispatch(editOneComment(commentId))
        },
        onCommentEditioning:(value)=>{
            dispatch(commentEditioning(value))
        },
        onCommentEdited:()=>{
            dispatch(commentEdited())
        }
    })
)(ModalWindow)

