import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Header = () => (
  <>
    <Navbar collapseOnSelect expand="lg" fixed="top" className="p-3">
      <Container>
        <Navbar.Brand href="#home">Yetemegn L.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/work">works</Nav.Link>
            <Nav.Link href="/about">
              About
            </Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            {/* <Nav.Link href="/contact">
              <FontAwesomeIcon icon={faEnvelope} beatFade />
            </Nav.Link> */}
          </Nav>
          <Button type="button" href="/contact" className="btn-warning mx-md-5 my-xs-3">Hire Me</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);
export default Header;
