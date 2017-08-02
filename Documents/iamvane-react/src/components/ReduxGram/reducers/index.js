//in redux we can only have one reducer
//we make a reducer for each part of our state
//then combine them into our rootreducer

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;