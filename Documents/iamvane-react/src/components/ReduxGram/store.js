import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import root reducer

import rootReducer from './reducers/index';

//import data
import comments from './data/comments';
import posts from './data/posts';

//create an onject from the default data

const defaultState={
	posts,
	comments
};

//make store

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
