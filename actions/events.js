export const getEvent = (idEvent) => {
	const type = 'GET_EVENT';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idEvent,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const addEvent = (form) => {
	const type = 'ADD_EVENT';

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

export const removeEvent = (idEvent) => {
	const type = 'REMOVE_EVENT';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idEvent,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const updateEvent = (form) => {
	const type = 'UPDATE_EVENT';

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

export { getEvent as default };
