import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice.jsx';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

console.log('Redux store configured:', store.getState());
