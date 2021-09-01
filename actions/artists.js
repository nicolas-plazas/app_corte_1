export const getArtist = (idArtist) => {
	const type = 'GET_ARTIST';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idArtist,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const addArtist = (form) => {
	const type = 'ADD_ARTIST';

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

export const removeArtist = (idArtist) => {
	const type = 'REMOVE_ARTIST';

	try {
		return async (dispatch) => {
			dispatch({
				type,
				id: idArtist,
			});
		};
	} catch (error) {
		console.error(error);
	}
};

export const updateArtist = (form) => {
	const type = 'UPDATE_ARTIST';

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

export { getArtist as default };
