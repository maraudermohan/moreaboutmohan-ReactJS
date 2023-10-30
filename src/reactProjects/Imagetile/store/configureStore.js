import { configureStore } from '@reduxjs/toolkit';
import { reducer as rootReducer } from '../reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
