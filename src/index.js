// Core react and DOM
import React from 'react';
import ReactDOM from 'react-dom';

// Redux store and provider
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import Reducer from './reducer.js'

// The main app and supporting scripts
import App from './App';

// Stylesheets
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

// Support for things that do or don't exist depending on browser and if Venus is in retrograde
import * as serviceWorker from './serviceWorker';

// Create the store
const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(Reducer)

// Main reder, contains all other renders that are placed around here.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
