import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { fetchCountriesData } from '../components/redux/countryActions.jsx';
import CountryCard from '../components/CountryCard.jsx';
import CustomDropdown from '../components/CustomDropdown.jsx';
import { BiSearch } from 'react-icons/bi';
import CountryDetail from '../components/CountryDetails.jsx';
import { Link, Route, Routes } from 'react-router-dom';

const Home = () => {
  const countries = useSelector((state) => state.countries.data);
  const dispatch = useDispatch();
  const regions = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filterCountries = (country) => {
    const countryName = country.name.common.toLowerCase();
    const searchQuery = searchTerm.toLowerCase();
    const regionMatch = selectedRegion === 'All' || country.region === selectedRegion;
    const searchMatch = !searchTerm || countryName.includes(searchQuery);
    return regionMatch && searchMatch;
  };

  const filteredCountries = countries.filter(filterCountries);

  return (
    // Define Dropdown and input and Add bootstrap classes
    <Container>
      <Row>
        <Col className='mt-3'>
          <CustomDropdown
            options={regions}
            onSelect={handleRegionSelect}
            onSearch={handleSearch}
            placeholder='Filter by Region'
            selectedOption={selectedRegion}
          />
        </Col>
      </Row>
      <Row className='justify-content-end mb-3'>
        <Col xs={4}>
          <InputGroup>
            <FormControl
              type='text'
              placeholder='Search for a country'
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <InputGroup.Text>
              <BiSearch />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Routes>
          <Route
            path='/'
            element={
              <>
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <Col key={country.alpha3Code} md={4} className='mb-4'>
                      <Link to={`/countries/${country.alpha3Code}`}>
                        <CountryCard country={country} />
                      </Link>
                    </Col>
                  ))
                ) : (
                  <p>No countries found.</p>
                )}
              </>
            }
          />
          <Route
            path='/countries/:alpha3Code'
            element={<CountryDetail countries={countries} />}
          />
        </Routes>
      </Row>
    </Container>
  );
};

export default Home;
