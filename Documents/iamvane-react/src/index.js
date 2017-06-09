import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserHistory } from 'react-history';
import App from './components/App';
//add css

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/index.css';

ReactDOM.render(
  <App history={BrowserHistory}/>,
  document.getElementById('root')
);