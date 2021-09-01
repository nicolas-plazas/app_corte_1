const initialState = {
	employees: [
		{
			id: 1,
			name: 'Empleado dir 1',
			photo:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU',
			phone: '12345679',
			pay: '10000',
			rol: true,
			university: '',
		},
		{
			id: 2,
			name: 'Empleado dir 2',
			photo:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU',
			phone: '12345619',
			pay: '12000',
			rol: true,
			university: '',
		},
		{
			id: 3,
			name: 'Empleado raso 1',
			photo:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU',
			phone: '12345678',
			pay: '5000',
			rol: false,
			university: '',
		},
		{
			id: 4,
			name: 'Empleado raso 2',
			photo:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU',
			phone: '1234567',
			pay: '5000',
			rol: false,
			university: '',
		},
	],
	employee: {
		id: '',
		name: '',
		photo: '',
		phone: '',
		pay: '',
		rol: '',
		university: '',
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_EMPLOYEE':
			return {
				...state,
				employee: state.employees.find(
					(item) => item.id.toString() === action.id,
				),
			};
		case 'ADD_EMPLOYEE':
			return {
				...state,
				employees: [...state.employees, action.payload],
			};
		case 'REMOVE_EMPLOYEE':
			return {
				...state,
				employees: state.employees.filter(
					(item) => item.id.toString() !== action.id.toString(),
				),
			};
		case 'UPDATE_EMPLOYEE':
			return {
				...state,
				employees: state.employees.map((item) => {
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
