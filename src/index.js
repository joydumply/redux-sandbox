const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;

		default:
			return state;
	}
};

let state = reducer(undefined, { type: 'INC' });

state = reducer(state, { type: 'INC' });
console.log(state);
