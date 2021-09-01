export const getAgency = (idAgency) => {
	const type = 'GET_AGENCY';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idAgency,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const addAgency = (form) => {
	const type = 'ADD_AGENCY';

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

export const removeAgency = (idAgency) => {
	const type = 'REMOVE_AGENCY';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idAgency,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const updateAgency = (form) => {
	const type = 'UPDATE_AGENCY';

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

export { getAgency as default };
