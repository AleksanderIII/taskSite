import {  CHANGE_REGISTER_NAME, CHANGE_REGISTER_LAST_NAME, CHANGE_REGISTER_PASSWORD,
    CHANGE_REGISTER_EMAIL, REGISTER } from '../constants/index.js'

const initialState = {
    name: '',
    lastName: '',
    email: '',
    password: ''
};

export default function registerform(state = initialState, action){
    switch(action.type){
    case CHANGE_REGISTER_NAME: return {...state, name: action.payload};
    case CHANGE_REGISTER_LAST_NAME: return {...state, lastName: action.payload};
    case CHANGE_REGISTER_PASSWORD: return {...state, password: action.payload};
    case CHANGE_REGISTER_EMAIL: return {...state, email: action.payload};
    case REGISTER: return {...state, name: '', lastName: '', email: '', password: ''};
    }
    return state;
}

