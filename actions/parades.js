export const getParade = (idParade) => {
	const type = 'GET_PARADE';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idParade,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const addParade = (form) => {
	const type = 'ADD_PARADE';

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

export const removeParade = (idParade) => {
	const type = 'REMOVE_PARADE';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idParade,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const updateParade = (form) => {
	const type = 'UPDATE_PARADE';

	try {
		return async (dispatch) => {
			await dispatch({
				type,
				payload: form,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export { getParade as default };
