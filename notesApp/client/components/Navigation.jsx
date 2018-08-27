import React,  { Fragment } from 'react';
import Form from './Form.jsx';
import LoginForm from './LoginForm.jsx';
import App from './App.jsx';
import { hot } from 'react-hot-loader';
import { Link, Route, Switch } from 'react-router-dom';


class Navigation extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <Switch>
                    <Route exact  path ='/' component = { Form }/>
                    <Route exact  path ='/login' component = { LoginForm }/>
                    <Route exact  path ='/app' component = { App } />
                    <Route render = {() => 
                        <Fragment>
                                <h1>
                                    Page not found
                                </h1>
                            <Link  to="/field">Go to app</Link>
                        </Fragment>
                        } />
                </Switch>
            </Fragment>
        ) 
    }
}
export default hot(module) (Navigation) 