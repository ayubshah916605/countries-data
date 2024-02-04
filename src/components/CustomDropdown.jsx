
import React from 'react';
import { Dropdown } from 'react-bootstrap';

const CustomDropdown = ({ options, onSelect, placeholder, selectedOption }) => {
  const handleOptionSelect = (option) => {
    onSelect(option);
  };
  // dropdown for Filter By Region 
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {selectedOption === 'All' ? placeholder : selectedOption}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleOptionSelect('All')}></Dropdown.Item>
        {options.map((option) => (
          <Dropdown.Item key={option} onClick={() => handleOptionSelect(option)}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
