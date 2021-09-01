export const getPavilion = (idPavilion) => {
	const type = 'GET_PAVILION';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idPavilion,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const addPavilion = (form) => {
	const type = 'ADD_PAVILION';

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

export const removePavilion = (idPavilion) => {
	const type = 'REMOVE_PAVILION';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idPavilion,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const updatePavilion = (form) => {
	console.log(form)
	const type = 'UPDATE_PAVILION';

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

export { getPavilion as default };
