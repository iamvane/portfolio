import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserHistory } from 'react-history';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './components/ScoreboardApp/reducers/PlayerReducers';

//add css

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/index.css';


const store = createStore(
	PlayerReducer,
	window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
	<Provider store={store}>
  		<App history={BrowserHistory}/>
 	</Provider>,
  document.getElementById('root')
);