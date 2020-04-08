import {
  combineReducers,
  createStore,
} from 'redux';

import reducers, { initialState } from './reducers';

const rootReducer = combineReducers(reducers);

const configureStore = () => (
  createStore(
    rootReducer,
    initialState,
  )
);

export default configureStore;
