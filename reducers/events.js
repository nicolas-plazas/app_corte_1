const initialState = {
	events: [
		{
			id: 1,
			name: 'Evento 1',
			startDate: '2021-08-31T09:19',
			finishDate: '2021-08-31T09:19',
			idDirectivo: 2,
			idParade: 2,
			idRasos: [3, 4],
			idDesfiles: [2],
			idPabellon: 2,
		},
		{
			id: 2,
			name: 'Evento 2',
			startDate: '2021-09-31T09:19',
			finishDate: '2021-09-31T09:19',
			idDirectivo: 2,
			idParade: 2,
			idRasos: [3, 4],
			idDesfiles: [2],
			idPabellon: 2,
		},
	],
	event: {
		id: '',
		name: '',
		startDate: '',
		finishDate: '',
		idDirectivo: '',
		idParade: '',
		idRasos: [],
		idDesfiles: [],
		idPabellon: '',
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_EVENT':
			return {
				...state,
				event: state.events.find((event) => event.id.toString() === action.id),
			};
		case 'ADD_EVENT':
			return {
				...state,
				events: [...state.events, action.payload],
			};
		case 'REMOVE_EVENT':
			return {
				...state,
				events: state.events.filter((item) => item.id.toString() !== action.id.toString()),
			};
		case 'UPDATE_EVENT':
			return {
				...state,
				events: state.events.map((item, i) => {
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
