import React from 'react';
import { connect } from 'react-redux';
import { getUsers, changeUserName, changeUserLastName, changeRole, addUser, deleteUser } from '../actions/index.js'
import './UsersList.css'
 

class UsersList extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.onGetUserList();
    }
    render(){
        return(
            <div className = "UsersList">
                <h2>Developers</h2>
                {
                    this.props.usersList.length > 0 ? 
                        <table>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Last name</th>
                                    <th>Role</th>
                                </tr>
                                {
                                    this.props.usersList.map((element, index) => 
                                        <tr key = {index}>
                                            <td>{element.name}</td>
                                            <td>{element.lastName}</td>
                                            <td>{element.role}</td>
                                            <td> <span onClick = {e => this.props.onDeleteUser(element._id)}>&#10007;</span></td>
                                        </tr>
                                    ) 
                                }
                            </tbody>
                            
                        </table>
                        : <p>We don't have developers</p>
                }
                <input 
                    type="text"
                    value = {this.props.user.name}
                    onChange = {e => this.props.onChangeUserName(e.target.value)}
                    placeholder = "new user name"
                    maxLength = "10"
                />
                <input 
                    type="text"
                    value = {this.props.user.lastName}
                    onChange = {e => this.props.onChangeUserLastName(e.target.value)}
                    placeholder = "new user last name"
                    maxLength = "10"
                />
                <p>
                    Role: <select onChange = {e => this.props.onChangeRole(e.target.value)}>
                        <option value="developer">developer</option>
                        <option value="manager">manager</option>
                </select>
                </p>
                
                <button onClick = {e => this.props.onAddUser(this.props.user)}>Add developer</button>
            </div>
        ) 
    }
}

export default  connect(
    state => ({
        user: state.user,
        usersList: state.usersList
    }),
    dispatch =>({
        onGetUserList:()=>{
            dispatch(getUsers())
        }, 
        onChangeUserName:(name)=>{
            dispatch(changeUserName(name)) 
        },
        onChangeUserLastName:(lastName)=>{
            dispatch(changeUserLastName(lastName)) 
        },
        onChangeRole:(role)=>{
            dispatch(changeRole(role))
        },
        onAddUser:(user)=>{
            dispatch(addUser(user))
        },
        onDeleteUser:(id)=>{
            dispatch(deleteUser(id))
        }
    })
)(UsersList)
 