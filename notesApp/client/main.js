import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation.jsx'


ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));






    