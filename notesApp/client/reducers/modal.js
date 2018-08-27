import { GET_NOTE, CLEAR_FORM, DELETE_COMMENT, NEW_COMMENT_CHANGE, POST_COMMENT_TO_NOTE, 
         TOGGLE_STATUS_SELECTION, CHANGE_STATUS, POST_NOTE_CHANGES, EDIT_ONE_COMMENT,
         COMMENT_EDITIONING, COMMENT_EDITED } from '../constants/index.js'

const initialState = {
    _id:'',
    title : '',
    text : '',
    developer: '',
    project: '',
    status: '',
    color : '',
    date: '',
    displayInput: false,
    newComment: '',
    showStatusSelection: false,
    showInputCommentEditor: false,
    editableComment:'',
    editedCommentValue: ''
};

export default function modal(state = initialState, action){
    switch(action.type){
    case GET_NOTE:  return {
        ...state,
        _id: action.payload._id,
        title : action.payload.title,
        text : action.payload.text,
        developer: action.payload.developer,
        project: action.payload.project,
        status: action.payload.status,
        color : action.payload.color,
        date: action.payload.date} ;
    case CLEAR_FORM: return {
        _id:'',
        title : '',
        text : '',
        developer: '',
        project: '',
        status: '',
        color : '',
        date: '',
        displayInput: false,
        newComment: '',
        showStatusSelection: false,
        showInputCommentEditor: false,
        editedCommentValue:''
    }
    case NEW_COMMENT_CHANGE : return { ...state, newComment: action.payload }
    case POST_COMMENT_TO_NOTE: return { ...state, text: state.text.concat(action.payload), newComment: '' }
    case DELETE_COMMENT: return { ...state, text: state.text.filter((elem, index) => index != action.payload), newComment: '' }; 
    case TOGGLE_STATUS_SELECTION: return { ...state, showStatusSelection: !state.showStatusSelection }; 
    case CHANGE_STATUS: return { ...state, status: action.payload };
    case POST_NOTE_CHANGES: return { ...state };
    case EDIT_ONE_COMMENT: return { ...state, showInputCommentEditor:  !state.showInputCommentEditor, editableComment: action.payload };
    case COMMENT_EDITIONING: return { ...state, editedCommentValue: action.payload };
    case COMMENT_EDITED: return { ...state, text: state.text.slice(0, state.editableComment).concat(state.editedCommentValue).concat(state.text.slice(state.editableComment+1)) };
    };
    
     return state;
}