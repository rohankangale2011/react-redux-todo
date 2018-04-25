import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import todoReducer from './todo-reducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    router: routerReducer
});

export default rootReducer;