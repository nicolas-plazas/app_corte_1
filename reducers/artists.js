const initialState = {
	artists: [
		{
			id: 1,
			name: 'nombre artistico',
			musicalGenre: 'pop',
			isBand: false,
			idEvent: 1,
			bands: [],
			members: [],
			creationDate: '',
			pay: '0',
		},
	],
	artist: {
		id: '',
		name: '',
		musicalGenre: '',
		isBand: false,
		idEvent: null,
		bands: [],
		members: [],
		creationDate: '',
		pay: '',
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ARTIST':
			return {
				...state,
				artist: state.artists.find((item) => item.id.toString() === action.id),
			};
		case 'ADD_ARTIST':
			return {
				...state,
				artists: [...state.artists, action.payload],
			};
		case 'REMOVE_ARTIST':
			return {
				...state,
				artists: state.artists.filter(
					(item) => item.id.toString() !== action.id.toString(),
				),
			};
		case 'UPDATE_ARTIST':
			return {
				...state,
				artists: state.artists.map((item) => {
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
