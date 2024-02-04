import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CountryCard.css'; 

const CountryCard = ({ country }) => {
  const { alpha3Code, name, flags, population, region, capital } = country;

  const flagUrl = flags.svg
    ? typeof flags.svg === 'string'
      ? flags.svg
      : flags.svg.url || Object.values(flags.svg)[0]
    : null;

  console.log('Checking country card for:', name.common);

  return (
    <Card className="h-100 shadow-sm">
      <Link to={`/country/${alpha3Code}`} className="country-card-link">
        {flagUrl && <Card.Img src={flagUrl} alt={`${name.common} flag`} className="card-img-top" />}
      </Link>
      <Card.Body>
        <Link to={`/country/${alpha3Code}`} className="country-card-title">
          <Card.Title className="h6 text-dark country-card-title">
            <span>{name.common}</span>
          </Card.Title>
        </Link>
        <Card.Text className="country-card-text">
          <p className="card-text">
            <strong>Population:</strong> {population}
            <br />
            <strong>Region:</strong> {region}
            <br />
            <strong>Capital:</strong> {capital}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
