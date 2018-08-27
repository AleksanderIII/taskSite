import { FILTER_BY_PROJECT, FILTER_BY_DEVELOPER  } from '../constants/index.js'

const initialState = {byDeveloper: 'All', byProject: 'All'};

export default function filter(state = initialState, action){
switch(action.type){
case FILTER_BY_PROJECT:  return { ...state, byProject: action.payload};
case FILTER_BY_DEVELOPER:  return { ...state, byDeveloper: action.payload};
}
return state;
}