import React,  { Fragment } from 'react';
import Form from './Form.jsx';
import SigninForm from './SigninForm.jsx';
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
                    <Route exact  path ='/signin' component = { SigninForm }/>
                    <Route exact  path ='/app' component = { App } />
                    <Route render = {() => 
                        <Fragment>
                                <h1>
                                    Page not found
                                </h1>
                            <Link  to="/signin">Go to app</Link>
                        </Fragment>
                        } />
                </Switch>
            </Fragment>
        ) 
    }
}
export default hot(module) (Navigation) 