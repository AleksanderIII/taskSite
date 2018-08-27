import { GET_NOTES_LIST, DELETE_NOTE } from '../constants/index.js'

const initialState = [];

export default function note(state = initialState, action){
    switch(action.type){
    case GET_NOTES_LIST:  return action.payload;
    case DELETE_NOTE: return action.payload;
    }
     return state;
}