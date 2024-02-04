import React from 'react';
import { Container, Row, Col, Navbar, Button } from 'react-bootstrap';
import { useTheme } from "../ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'}>
      <Container>
        <Row className="w-100 p-3">
          <Col xs={6} className="d-flex align-items-center">
            <span className={`small-text ${theme === 'dark' ? 'text-light' : 'text-dark'}`}><h2>Where in the world?</h2></span>
          </Col>
          <Col xs={6} className="d-flex justify-content-end align-items-center">
            <Button variant={theme === 'dark' ? 'light' : 'dark'} size="md" onClick={toggleTheme}>
              <i className={`bi ${theme === 'dark' ? 'bi-moon' : 'bi-lightbulb'}`}></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;




