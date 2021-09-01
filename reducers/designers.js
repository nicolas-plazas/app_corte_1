const initialState = {
	designers: [
		{
			id: '1',
			name: 'diseñador 1',
			passport: 'pasaporte 1',
			country: 'Colombia',
		},
		{
			id: '2',
			name: 'diseñador 2',
			passport: 'pasaporte 2',
			country: 'Colombia',
		},
	],
	designer: {
		id: '',
		name: '',
		passport: '',
		country: '',
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_DESIGNER':
			return {
				...state,
				designer: state.designers.find(
					(item) => item.id.toString() === action.id,
				),
			};
		case 'ADD_DESIGNER':
			return {
				...state,
				designers: [...state.designers, action.payload],
			};
		case 'REMOVE_DESIGNER':
			return {
				...state,
				designers: state.designers.filter(
					(item) => item.id.toString() !== action.id.toString(),
				),
			};
		case 'UPDATE_DESIGNER':
			return {
				...state,
				designers: state.designers.map((item) => {
					if (item.id.toString() !== action.payload.id) {
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
