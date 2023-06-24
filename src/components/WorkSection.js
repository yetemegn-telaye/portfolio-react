import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WorkSection = () => (
  <Container className="py-4 my-4">
    <div className="works-title d-flex flex-lg-column flex-md-column">
      <h2 className="mb-3">My Recent Works</h2>
      <hr className="w-75 mt-4" />
    </div>
    <div className="projects">
      <Row className="justify-content-center align-items-center">
        <Col sm={12} md={6}>Project 1</Col>
        <Col sm={12} md={6}>Project 2</Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col sm={12} md={6}>Project 3</Col>
        <Col sm={12} md={6}>Project 4</Col>
      </Row>
    </div>
  </Container>
);
export default WorkSection;
