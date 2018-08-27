import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form>
                <input 
                    type="text"
                    placeholder = "Name"    
                />
                <input 
                    type="text"
                    placeholder ="password"
                />
                <button><Link to="/app"><b>enter</b> </Link> </button>
                <span><Link to="/">register</Link></span> 
            </form>
        )
    }
}
export default LoginForm