const initialState = {
	info: [
		{
			id: 1,
			title: 'hello',
		},
		{
			id: 2,
			title: 'hello2',
		},
		{
			id: 3,
			title: 'hello3',
		},
		{
			id: 4,
			title: 'hello4',
		},
		{
			id: 5,
			title: 'hello5',
		},
	],
};

export const crafts = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};