import axios from 'axios';
import { setCountries } from './countriesSlice.jsx';

export const fetchCountriesData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const data = response.data.map(country => {
        const alpha3Code = country.cca3 || generateUniqueIdentifier();
        return { ...country, alpha3Code };
      });

      dispatch(setCountries(data));
    } catch (error) {
      console.error('Error fetching countries:', error.message);
    }
  };
};

const generateUniqueIdentifier = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};


export const selectCountries = (state) => state.countries.data;