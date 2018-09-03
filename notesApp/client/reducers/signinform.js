import { CHANGE_SIGNIN_EMAIL, CHANGE_SIGNIN_PASSWORD, SIGNIN } from '../constants/index.js'

const initialState = {
    email: '',
    password: ''
};

export default function registerform(state = initialState, action){
    switch(action.type){
    case CHANGE_SIGNIN_PASSWORD: return {...state, password: action.payload};
    case CHANGE_SIGNIN_EMAIL: return {...state, email: action.payload};
    case SIGNIN:  return {...state, email: '', password:''};
    }
    return state;
}

