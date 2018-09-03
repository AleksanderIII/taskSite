import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeSignInEmail, changeSignInPassword, signIn } from '../actions'

class SinginForm extends React.Component{
    constructor(props){
        super(props)
        this.valid = false;
    }
    componentWillUpdate(){
        let emailLength = this.props.signinform.email.length;
        let passwordLength = this.props.signinform.password.length;
        if(emailLength > 1 && passwordLength > 1){
            this.valid = true;
        }else{
            this.valid = false;
        }
    }

    render(){
        return(
            <form>
                <h2>SIGN IN</h2>
                <input 
                    value = {this.props.signinform.email}
                    type = "text"
                    placeholder = "email"    
                    onChange = {e => this.props.onChangeSignInEmail(e.target.value)}
                />
                <input 
                    value = {this.props.signinform.password}
                    type="text"
                    placeholder ="password"
                    onChange = {e => this.props.onChangeSignInPassword(e.target.value)}
                />
                <button disabled = {!this.valid}>
                    {this.valid ? 
                        <Link onClick = {e => this.props.onSignIn(this.props.signinform)} to="/app"><b>enter</b></Link>
                        :<b>please, fill in the form</b>}
                </button>
                <span><Link to="/">register</Link></span> 
            </form>
        )
    }
}
export default connect(
    state => ({
        signinform: state.signinform
    }),
    dispatch =>({
        onChangeSignInEmail:(email)=>{
            dispatch(changeSignInEmail(email));
        },
        onChangeSignInPassword:(password)=>{
            dispatch(changeSignInPassword(password));
        },
        onSignIn:(user)=>{
            dispatch(signIn(user));
        },
    })
)(SinginForm) 