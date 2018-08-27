import { GET_USERS_LIST, DELETE_USER } from '../constants/index.js'

const initialState = [];

export default function usersList(state = initialState, action){
    switch(action.type){
    case GET_USERS_LIST: return  action.payload;
    case DELETE_USER: return  action.payload;
    }
    return state;
}