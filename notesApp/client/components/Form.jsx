import React, { Fragment } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeRegiterName, changeRegisterLastName, changeRegisterPassword, 
         changeRegisteEmail, Register } from '../actions'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.valid = false;
        this.register = this.register.bind(this)
    }


    componentWillUpdate(){
        let {name, lastName, email, password} = this.props.registerform;

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        let emailValidOrNot = validateEmail(email);

        if(name.length > 0 && lastName.length > 0 && password.length > 0 && emailValidOrNot){
            this.valid = true;
        }
    }

    register(e){
        this.props.onRegister(this.props.registerform);
        e.preventDefault();
    };

    render(){
        return(
            <Fragment>
                <h2>REGISTER</h2>
                <form>
                    <input 
                        type="text"
                        placeholder = "Name"    
                        value = {this.props.registerform.name}
                        onChange = {e =>  this.props.onChangeRegisterName(e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder ="last name"
                        value = {this.props.registerform.lastName}
                        onChange = {e =>  this.props.onChangeRegisterLastName(e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="password"
                        value = {this.props.registerform.password}
                        onChange = {e =>  this.props.onChangeRegistePassword(e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="email"
                        value = {this.props.registerform.email}
                        onChange = {e => this.props.onChangeRegisteEmail(e.target.value)}
                    />
                    <button disabled = {!this.valid} onClick = {e => this.register(e)} >
                        {this.valid?<b>register</b>:<b>please, fill in the form</b>}
                    </button> 
                    <span><Link to="/login">Log in</Link></span>               
                </form>
            </Fragment>
            
        )
    }
}
export default connect(
    state => ({
        note: state.note,
        registerform: state.registerform
    }),
    dispatch =>({
        onChangeRegisterName:(name)=>{
            dispatch(changeRegiterName(name));
        },
        onChangeRegisterLastName:(lastName)=>{
            dispatch(changeRegisterLastName(lastName))
        },
        onChangeRegistePassword:(password)=>{
            dispatch(changeRegisterPassword(password))
        },
        onChangeRegisteEmail:(email)=>{
            dispatch(changeRegisteEmail(email))   
        },
        onRegister:(user)=>{
            dispatch(Register(user))   
        }
    })
)(Form)