const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';

const initialState = {
	menuOpen: false,
};

export const menu = (state = initialState, action = { type: openMenu }) => {
	switch (action.type) {
		case CLOSE_MENU:
			console.log('close');
			return { ...state, menuOpen: false };
		case OPEN_MENU:
			console.log('open');

			return { ...state, menuOpen: true };
		default:
			return state;
	}
};

//actionCreators
export const openMenu = () => {
	return {
		type: OPEN_MENU,
	};
};
export const closeMenu = () => {
	return {
		type: CLOSE_MENU,
	};
};
