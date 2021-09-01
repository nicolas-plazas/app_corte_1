const initialState = {
	agencies: [
		{
			id: 1,
			name: 'agencia 1',
			country: 'Colombia',
			headquarters: 'Colombia',
			yearCreation: '',
			email: 'agencia1@gmail.com',
			owner: 'dueño agencia',
			subCompanies: [
				{
					id: 1,
					name: 'sub agencia 2',
					yearCreation: '',
					email: 'subagencia1@gmail.com',
				},
			],
		},
	],
	agency: {
		id: '',
		name: '',
		country: '',
		headquarters: '',
		yearCreation: '',
		email: '',
		owner: '',
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_AGENCY':
			return {
				...state,
				agency: state.agencies.find(
					(event) => event.id.toString() === action.id,
				),
			};
		case 'ADD_AGENCY':
			return {
				...state,
				agencies: [...state.agencies, action.payload],
			};
		case 'REMOVE_AGENCY':
			return {
				...state,
				agencies: state.agencies.filter(
					(item) => item.id.toString() !== action.id.toString(),
				),
			};
		case 'UPDATE_AGENCY':
			return {
				...state,
				agencies: state.agencies.map((item) => {
					if (item.id !== action.payload.id) {
						return item;
					}

					return {
						...item,
						...action.payload
					}
				}),
			};
		default:
			return state;
	}
};

export default reducer;
