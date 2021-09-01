export const getModel = (idModel) => {
	const type = 'GET_MODEL';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idModel,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const addModel = (form) => {
	const type = 'ADD_MODEL';

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

export const removeModel = (idModel) => {
	const type = 'REMOVE_MODEL';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idModel,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const updateModel = (form) => {
	const type = 'UPDATE_MODEL';

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

export { getModel as default };
