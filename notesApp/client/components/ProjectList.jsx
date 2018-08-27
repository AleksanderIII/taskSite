import React from 'react';
import { connect } from 'react-redux';
import { getProjectsList, deleteProject, createProject, changeProjectTitle} from '../actions/index.js'
import './ProjectList.css'
 

class ProjectList extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.onGetProjectsList();
    }
    render(){
        return(
            <div className = "ProjectList">
                <h2>Actual projects</h2>
                {
                    this.props.projectList.length > 0 && 
                        <ul>
                            {
                               this.props.projectList.map((element, index) => 
                                <li key = {index}>
                                    {element.title}
                                    <span onClick = {e => this.props.onDeleteProject(element._id)}>&#10007;</span>
                                </li>
                               ) 
                            }
                        </ul>
                }
                
                <input 
                    value = {this.props.project.title}  
                    onChange = {e=>this.props.onChangeProjectTitle(e.target.value)} 
                    type="text" 
                    maxLength="15"
                    placeholder = "New project" 
                />
                <button onClick = {e=>this.props.onCreateProject(this.props.project)}>Add project name</button>
            </div>
        ) 
    }
}

export default  connect(
    state => ({
        project: state.project,
        projectList: state.projectList
    }),
    dispatch =>({onChangeProjectTitle:(project)=>{
            dispatch(changeProjectTitle(project));
        },
        onGetProjectsList:()=>{
            dispatch(getProjectsList());
        },
        onDeleteProject:(id)=>{
            dispatch(deleteProject(id))
        },
        onCreateProject:(project)=>{
            dispatch(createProject(project))
        }
    })
)(ProjectList)
 