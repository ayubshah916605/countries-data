import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      console.log("Reducer: setCountries action dispatched with payload:", action.payload);
      state.data = action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;
export const selectCountries = (state) => state.countries.data;

export default countriesSlice.reducer;