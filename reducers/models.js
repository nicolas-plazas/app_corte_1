const initialState = {
	models: [
		{
			id: 1,
			passport: '123456',
			country: 'Colombia',
			name: 'model 1',
			birthDate: '',
			agencyId: 1,
			eyeColor: 'blue',
			height: '1.96',
			waist: '1',
			chest: '1',
			shoeSize: '39',
			weight: 40,
			peculiarities: 'peculiaridades',
			pay: 0,
			portfolios: [
				{
					objective: 'objetivo portafolio',
					yearCreation: '',
					evolution: [
						{
							height: '1.8',
							weightEvolution: '1',
							waist: '1',
							chest: '1',
						},
					],
					photos: [],
				},
			],
			parades: [],
			historic: [],
			ropa: [],
		},
	],
	model: {
		passport: '',
		country: '',
		name: '',
		birthDate: '',
		agencyId: '',
		eyeColor: '',
		height: '',
		waist: '',
		chest: '',
		shoeSize: '',
		weight: '',
		peculiarities: '',
		pay: '',
		portfolios: [],
		parades: [],
		weight: [],
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_MODEL':
			return {
				...state,
				model: state.models.find((item) => item.id.toString() === action.id),
			};
		case 'ADD_MODEL':
			return {
				...state,
				models: [...state.models, action.payload],
			};
		case 'REMOVE_MODEL':
			return {
				...state,
				models: state.models.filter((item) => item.id.toString() !== action.id.toString()),
			};
		case 'UPDATE_MODEL':
			return {
				...state,
				models: state.models.map((item) => {
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
