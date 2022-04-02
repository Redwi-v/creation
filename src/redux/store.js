import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//redusers
import { menu } from './menu';

const redusers = combineReducers({
	menu,
});

const store = createStore(redusers, applyMiddleware(thunk));
export default store;
window.store = store;
