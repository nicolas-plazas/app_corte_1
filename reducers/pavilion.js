const initialState = {
	pavilions: [
		{
			id: 1,
			name: 'nombre unico 1',
			employeeId: 1,
			phone: 123456789,
		},
		{
			id: 2,
			name: 'nombre unico 2',
			employeeId: 2,
			phone: 123456009,
		},
	],
	pavilion: {
		id: '',
		name: '',
		employeeId: '',
		phone: '',
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_PAVILION':
			return {
				...state,
				pavilion: state.pavilions.find(
					(item) => item.id.toString() === action.id,
				),
			};
		case 'ADD_PAVILION':
			return {
				...state,
				pavilions: [...state.pavilions, action.payload],
			};
		case 'REMOVE_PAVILION':
			return {
				...state,
				pavilions: state.pavilions.filter(
					(item) => item.id.toString() !== action.id.toString(),
				),
			};
		case 'UPDATE_PAVILION':
			return {
				...state,
				pavilions: state.pavilions.map((item) => {
					if (item.id !== action.payload.id) {
						return item;
					}

					return {
						...item,
						...action.payload
					};
				}),
			};
		default:
			return state;
	}
};

export default reducer;
