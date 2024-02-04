import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetail = ({ countries }) => {
  const { alpha3Code } = useParams();
  const selectedCountry = countries.find((country) => country.alpha3Code === alpha3Code);

  if (!selectedCountry) {
    return <p>Country not found.</p>;
  }

  const {
    name,
    flags,
    population,
    region,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = selectedCountry;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-center'>
          <img src={flags.png} alt={`${name.common} Flag`} className='img-fluid mt-4' />
        </div>
        <div className='col-md-6'>
          <h2>{name && name.common}</h2>
          <p className='lead m-1'>{`Population: ${population || 'Not available'}`}</p>
          <p className='lead m-1'>{`Region: ${region || 'Not available'}`}</p>
          <p className='lead m-1'>{`Capital: ${capital || 'Not available'}`}</p>
          <p className='lead m-1'>{`Top Level Domain: ${topLevelDomain ? topLevelDomain.join(', ') : 'Not available'}`}</p>
          <p className='lead m-1'>{`Currencies: ${Array.isArray(currencies) ? currencies.map((currency) => currency.name).join(', ') : 'Not available'}`}</p>
          <p className='lead m-1'>{`Languages: ${Array.isArray(languages) ? languages.join(', ') : Object.values(languages).join(', ') || 'Not available'}`}</p>
          <p className='lead m-1'>{`Border Countries: ${Array.isArray(borders) && borders.length > 0 ? borders.join(', ') : 'No bordering countries'}`}</p>
          <Link to='/' className='btn btn-primary mb-3'>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
