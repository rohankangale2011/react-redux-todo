import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

// const configStore = createStore(rootReducer);

// export default configStore;
export const history = createHistory();
const middleware       = routerMiddleware(history);

export function configStore() {
	const store = createStore(
		rootReducer,
		applyMiddleware(middleware)
	)

	return store
}