import { GET_PROJECTS_LIST, DELETE_PROJECT} from '../constants/index.js'

const initialState = [];

export default function projectList(state = initialState, action){
    switch(action.type){
    case GET_PROJECTS_LIST: return  action.payload;
    case DELETE_PROJECT: return action.payload;
    }
     return state;
}