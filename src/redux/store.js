import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//redusers
import { menu } from './menu';
import { music } from './music';
import { crafts } from './crafts';
import { legends } from './legends';
import { clothes } from './clothes';

const redusers = combineReducers({
	menu,
	music,
	crafts,
	legends,
	clothes,
});

const store = createStore(redusers, applyMiddleware(thunk));
export default store;
window.store = store;
