export const getDesigner = (idDesigner) => {
	const type = 'GET_DESIGNER';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idDesigner,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const addDesigner = (form) => {
	const type = 'ADD_DESIGNER';

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

export const removeDesigner = (idDesigner) => {
	const type = 'REMOVE_DESIGNER';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idDesigner,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const updateDesigner = (form) => {
	const type = 'UPDATE_DESIGNER';

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

export { getDesigner as default };
