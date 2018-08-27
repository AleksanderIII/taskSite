import { COLOR_SELECT, TITLE_CHANGE, TEXT_CHANGE, DEVELOPER_CHANGE, POST_NOTE, 
         CHANGE_PROJECT, CHANGE_NOTE_STATUS, SET_INITIAL_PROJECT, SET_INITIAL_DEVELOPER } from '../constants/index.js'

const initialState = {
    title : '',
    text : '',
    developer: '',
    project: '-',
    status: 'waiting',
    color : 'gold'
};

export default function note(state = initialState, action){
    switch(action.type){
    case COLOR_SELECT:  return { ...state, color: action.payload};
    case TITLE_CHANGE:  return { ...state, title: action.payload};
    case TEXT_CHANGE:  return { ...state, text: action.payload};
    case SET_INITIAL_PROJECT:{ 
        if(action.payload.length > 0) {
            return { ...state, project: action.payload[0].title}
        } else{
            return { ...state, project: ''}   
        }}
    case DEVELOPER_CHANGE:  return { ...state, developer: action.payload};
    case CHANGE_PROJECT:  return { ...state, project: action.payload};
    case CHANGE_NOTE_STATUS:  return { ...state, status: action.payload};
    case POST_NOTE: return {...state, title : '', text : '', color : 'gold'};
    case SET_INITIAL_DEVELOPER:{ 
        if(action.payload.length > 0) {
            return { ...state, developer: action.payload[0].name+' '+action.payload[0].lastName}
        } else{
            return { ...state, developer: ''}   
        }}
    }
     return state;
}