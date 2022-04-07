import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//redusers
import { menu } from './menu';
import { music } from './music';

const redusers = combineReducers({
	menu,
	music,
});

const store = createStore(redusers, applyMiddleware(thunk));
export default store;
window.store = store;
