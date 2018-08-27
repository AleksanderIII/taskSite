import { CHANGE_PROJECT_TITLE, POST_PROJECT } from '../constants/index.js'

const initialState = {
    title : '',
};

export default function project(state = initialState, action){
    switch(action.type){
    case CHANGE_PROJECT_TITLE: return {...state, title: action.payload};
    case POST_PROJECT: return {...state, title : ''};
    }
    return state;
}