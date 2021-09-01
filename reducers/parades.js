const initialState = {
	parades: [
		{
			id: 1,
			date: '',
			name: 'desfile 1',
			idDesigner: 1,
			idPavilion: 1,
			garments: [
				{
					idUser: 1,
					garment: 'photo',
				},
			],
		},
		{
			id: 2,
			date: '',
			name: 'desfile 2',
			idDesigner: 1,
			idPavilion: 1,
			garments: [
				{
					idUser: 1,
					garment: 'photo',
				},
			],
		},
	],
	parade: {
		id: '',
		date: '',
		name: '',
		idDesigner: '',
		idPavilion: '',
		garments: [],
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_PARADE':
			return {
				...state,
				parade: state.parades.find((item) => item.id.toString() === action.id),
			};
		case 'ADD_PARADE':
			return {
				...state,
				parades: [...state.parades, action.payload],
			};
		case 'REMOVE_PARADE':
			return {
				...state,
				parades: state.parades.filter(
					(item) => item.id.toString() !== action.id.toString(),
				),
			};
		case 'UPDATE_PARADE':
			return {
				...state,
				parades: state.parades.map((item) => {
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
