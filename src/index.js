import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux'
import configureStore from './store';
import Nav from './components/Nav';
import App from './App';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import Authentication from './components/Authentication';



   
    
ReactDOM.render(
    <Provider store={configureStore()}>
        routing
    </Provider>,
    document.getElementById('root'));