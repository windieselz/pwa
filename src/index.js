import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './modules/login/login.jsx'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
