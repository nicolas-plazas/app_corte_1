import { combineReducers } from 'redux';
import agencies from './agencies';
import artists from './artists';
import designers from './designers';
import employees from './employees';
import events from './events';
import models from './models';
import parades from './parades';
import pavilion from './pavilion';

const rootReducers = combineReducers({
	agencies,
	artists,
	designers,
	employees,
	events,
	models,
	parades,
	pavilion,
});

export default rootReducers;
