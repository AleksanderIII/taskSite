import { CHANGE_USER_NAME, CHANGE_USER_LAST_NAME, CHANGE_USER_ROLE, ADD_USER } from '../constants/index.js'

const initialState = {
    name : '',
    lastName: '',
    role: 'developer'
};

export default function user(state = initialState, action){
    switch(action.type){
    case CHANGE_USER_NAME: return {...state, name: action.payload};
    case CHANGE_USER_LAST_NAME: return {...state, lastName: action.payload};
    case CHANGE_USER_ROLE: return {...state, role: action.payload};
    case ADD_USER: return {...state, 
        name : '',
        lastName: '',
        role: 'developer'};
    }
    return state;
}