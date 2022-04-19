import text from '../textForlegens/textForlegends';

const initialState = {
	legendsList: [
		{
			id: 1,
			title: 'Благочестивая жена',
			text: text.text1,
		},

		{
			id: 2,
			title: 'Змея',
			text: text.text2,
		},
		{
			id: 3,
			title: 'Волк',
			text: text.text3,
		},
	],
};

export const legends = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
