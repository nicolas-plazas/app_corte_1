import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducers from './rootReducers';

const middleware = [thunk];

const makeStore = () =>
	createStore(rootReducers, compose(applyMiddleware(...middleware)));

export const wrapper = createWrapper(makeStore);
