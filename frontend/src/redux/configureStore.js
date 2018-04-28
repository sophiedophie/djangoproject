import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import user from 'redux/modules/user';
import Reactotron from 'ReactotronConfig';
import { composeWithDevTools } from 'redux-devtools-extension';
import { i18nState } from 'redux-i18n'

const env = process.env.NODE_ENV;

const history = createHistory()
// thunk for async calls such as api, routerMiddleware for broswer history
const middlewares = [thunk, routerMiddleware(history)]

if (env === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger)
}

const reducer = combineReducers({
    user,
    routing: routerReducer,
    i18nState,
})

let store;
if (env === 'development') {
    store = initialState => Reactotron.createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares))) 
} else {
    store = initialState => createStore(reducer, applyMiddleware(...middlewares))
}


// what is history object exactly? to connect router to middleware..? component?
export { history };
export default store;