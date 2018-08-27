import React from 'react';
import './Filter.css';
import { connect } from 'react-redux';

class Filter extends React.Component{
    constructor(props){
        super(props)
        this.props = props; 
    }
    render(){
        return(
            <div className = "Filter">
                <h4><b>Filters:</b> </h4>
                <div>
                    <label>
                        by developers:
                    </label>
                    <select  onChange = { e => this.props.filterByDeveloper(e.target.value) }  >
                        <option key={0} value="All">All</option>  
                        {
                            this.props.usersList.map((element, index) =>
                                <option key={index+1} value={element.name +' '+ element.lastName}>{element.name +' '+ element.lastName}</option>  
                            )
                        }
                    </select>
                    <label>
                        by projects:
                    </label>
                    <select onChange = { e => this.props.filterByProject(e.target.value) }>
                        <option key={0} value="All">All</option>  
                        {
                            this.props.projectList.map((element, index) =>
                                <option key={index+1} value={element.title}>{element.title}</option>  
                            )
                        }
                    </select> 
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        usersList: state.usersList,
        projectList: state.projectList,
        notesList: state.notesList,
        filter: state.filter
    }),
    dispatch =>({
    })
)(Filter)