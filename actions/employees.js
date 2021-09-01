export const getEmployee = (idEmployee) => {
	const type = 'GET_EMPLOYEE';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idEmployee,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const addEmployee = (form) => {
	const type = 'ADD_EMPLOYEE';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				payload: form,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const removeEmployee = (idEmployee) => {
	const type = 'REMOVE_EMPLOYEE';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idEmployee,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const updateEmployee = (form) => {
	const type = 'UPDATE_EMPLOYEE';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				payload: form,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export { getEmployee as default };
