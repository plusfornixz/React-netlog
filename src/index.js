import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import $ from 'jquery/dist/jquery.slim';
import popper from 'popper.js/dist/popper';
import 'bootstrap/dist/js/bootstrap.bundle';
import * as serviceWorker from './serviceWorker';
import Netlog from './Netlog';

ReactDOM.render(<Netlog />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
