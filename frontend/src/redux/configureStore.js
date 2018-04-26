import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import users from 'redux/modules/users';

const env = process.env.NODE_ENV;

const history = createHistory()
// thunk for async calls such as api, routerMiddleware for broswer history
const middlewares = [thunk, routerMiddleware(history)]

if (env === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger)
}

const reducer = combineReducers({
    users,
    routing: routerReducer,
})

let store = initialState => createStore(reducer, applyMiddleware(...middlewares))

// what is history object exactly? to connect router to middleware..? component?
export { history };
export default store;