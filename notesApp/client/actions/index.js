import { COLOR_SELECT, TITLE_CHANGE, TEXT_CHANGE, DEVELOPER_CHANGE, POST_NOTE,
         GET_NOTES_LIST, DELETE_NOTE, CHANGE_NOTE_STATUS, GET_NOTE, CLEAR_FORM,
         GET_PROJECTS_LIST, DELETE_PROJECT, POST_PROJECT, CHANGE_PROJECT_TITLE, CHANGE_PROJECT,
         SET_INITIAL_PROJECT, GET_USERS_LIST, SET_INITIAL_DEVELOPER, FILTER_BY_PROJECT,
         FILTER_BY_DEVELOPER, DELETE_COMMENT, NEW_COMMENT_CHANGE, POST_COMMENT_TO_NOTE, TOGGLE_STATUS_SELECTION,
         CHANGE_STATUS, POST_NOTE_CHANGES, EDIT_ONE_COMMENT, COMMENT_EDITIONING, COMMENT_EDITED,
         CHANGE_USER_NAME, CHANGE_USER_LAST_NAME, CHANGE_USER_ROLE, ADD_USER, DELETE_USER,
         CHANGE_REGISTER_NAME, CHANGE_REGISTER_LAST_NAME, CHANGE_REGISTER_PASSWORD,
         CHANGE_REGISTER_EMAIL, REGISTER } from '../constants/index.js';


export const changeRegiterName = (name) => ( {
    type: CHANGE_REGISTER_NAME,
    payload: name
});  

export const changeRegisterLastName = (lastName) => ( {
    type: CHANGE_REGISTER_LAST_NAME,
    payload: lastName
});  

export const changeRegisterPassword = (password) => ( {
    type: CHANGE_REGISTER_PASSWORD,
    payload: password
});  

export const changeRegisteEmail = (email) => ( {
    type: CHANGE_REGISTER_EMAIL,
    payload: email
});  

export  const  Register =  (user) => dispatch =>{
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    fetch(`http://localhost:8080/register`,  fetchOptions)
        .then(response => response.json())
        .then(data => {dispatch({type: REGISTER}); return data} )
        .then(data => {dispatch({type: ADD_USER}); return data} )
        .then(data =>  dispatch({type: GET_USERS_LIST, payload: data}) )
};

export const changeNoteColor = (note) => ( {
    type: COLOR_SELECT,
    payload: note
});

export const changeNoteTitle = (note) => ( {
    type: TITLE_CHANGE,
    payload: note
});

export const changeNoteText = (note) => ( {
    type: TEXT_CHANGE,
    payload: note
});

export const changeNoteDeveloper = (note) => ( {
    type: DEVELOPER_CHANGE,
    payload: note
});

export const changeNoteProject = (note) => ( {
    type: CHANGE_PROJECT,
    payload: note
});

export const changeNoteStatus = (note) => ( {
    type: CHANGE_NOTE_STATUS,
    payload: note
});

export const changeProjectTitle = (project) => ( {
    type: CHANGE_PROJECT_TITLE,
    payload: project
});

export const filterByProject = (project) => ( {
    type: FILTER_BY_PROJECT,
    payload: project
});

export const filterByDeveloper = (developer) => ( {
    type: FILTER_BY_DEVELOPER,
    payload: developer
});


export const deleteComment = (id) => ( {
    type: DELETE_COMMENT,
    payload: id
});


export const newCommentChange = (comment) => ( {
    type: NEW_COMMENT_CHANGE,
    payload: comment
});

export const toggleStatusSelection = () => ( {
    type: TOGGLE_STATUS_SELECTION
});

export const changeStatus = (status) => ( {
    type: CHANGE_STATUS,
    payload: status
});


export  const  addComment =  (comment) => ({
    type: POST_COMMENT_TO_NOTE,
    payload: comment
}) ;

export  const  editOneComment =  (commentId) => ({
    type: EDIT_ONE_COMMENT,
    payload: commentId
}) ;

export  const  commentEditioning =  (comment) => ({
    type: COMMENT_EDITIONING,
    payload: comment
}) ;

export  const  commentEdited =  () => ({
    type: COMMENT_EDITED
}) ;

export  const  changeUserName =  (name) => ({
    type: CHANGE_USER_NAME,
    payload: name
}) ;

export  const  changeUserLastName =  (lastName) => ({
    type: CHANGE_USER_LAST_NAME,
    payload: lastName
}) ;

export  const  changeRole =  (role) => ({
    type: CHANGE_USER_ROLE,
    payload: role
}) ;

export const deleteUser = (id) => dispatch =>{
    const fetchOptions = {
        method: 'DELETE'
    };
    fetch(`http://localhost:8080/users/${id}`, fetchOptions)
        .then(response => response.json())
        .then(data => {dispatch({type: DELETE_USER, payload: data}); return data} )
        .then(data => {dispatch({type: SET_INITIAL_DEVELOPER, payload: data})})
}

export  const  addUser =  (user) => dispatch =>{
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    fetch(`http://localhost:8080/users`,  fetchOptions)
        .then(response => response.json())
        .then(data => {dispatch({type: ADD_USER}); return data} )
        .then(data =>  dispatch({type: GET_USERS_LIST, payload: data}) )
};


export  const  postNoteChanges =  (note) => dispatch =>{
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    };
    fetch(`http://localhost:8080/notes/${note._id}`,  fetchOptions)
        .then(response => response.json())
        .then(data => {dispatch({type: POST_NOTE_CHANGES}); return data} )
        .then(data => {dispatch({type: GET_NOTES_LIST, payload: data}); return data} )
        .then(dispatch({type: CLEAR_FORM}))
};


export const getUsers = () => dispatch =>{
    fetch("http://localhost:8080/users")
        .then(response => response.json())
        .then(data =>  {dispatch({type: GET_USERS_LIST, payload: data}); return data} )
        .then(data => {dispatch({type: SET_INITIAL_DEVELOPER, payload: data})})
}

export const getProjectsList = () => dispatch =>{
    fetch("http://localhost:8080/projects")
        .then(response => response.json())
        .then(data =>{dispatch({type: GET_PROJECTS_LIST, payload: data}); return data} )
        .then(data => {dispatch({type: SET_INITIAL_PROJECT, payload: data})})
}

export  const  createProject =  (project) =>  dispatch =>{
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    };
    fetch("http://localhost:8080/projects",  fetchOptions)
        .then(dispatch({type: POST_PROJECT, payload: project}))
        .then(response => response.json())
        .then(data => {dispatch({type: GET_PROJECTS_LIST, payload: data}); return data} )
        .then(data => {dispatch({type: SET_INITIAL_PROJECT, payload: data})})
}

export const deleteProject = (id) => dispatch =>{
    const fetchOptions = {
        method: 'DELETE'
    };
    fetch(`http://localhost:8080/projects/${id}`, fetchOptions)
        .then(response => response.json())
        .then(data => {dispatch({type: DELETE_PROJECT, payload: data}); return data} )
        .then(data => {dispatch({type: SET_INITIAL_PROJECT, payload: data})})
}

export  const  createNote =  (note) =>  dispatch =>{
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    };
    fetch("http://localhost:8080/notes",  fetchOptions)
        .then(dispatch({type: POST_NOTE, payload: note}))
        .then(response => response.json())
        .then(data => dispatch({type: GET_NOTES_LIST, payload: data}))
}


export const getNotesList = () => dispatch =>{
    fetch("http://localhost:8080/notes")
        .then(response => response.json())
        .then(data => dispatch({type: GET_NOTES_LIST, payload: data}))
}

export const getNote = (id) => dispatch =>{
    fetch(`http://localhost:8080/note/${id}`)
        .then(response => response.json())
        .then(data => dispatch({type: GET_NOTE, payload: data}))
}

export const deleteNote = (id) => dispatch =>{
    const fetchOptions = {
        method: 'DELETE'
    };
    fetch(`http://localhost:8080/notes/${id}`, fetchOptions)
        .then(response => response.json())
        .then(data => dispatch({type: DELETE_NOTE, payload: data}))
}

export const clearForm = () => ( {
    type: CLEAR_FORM
});
