import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import handymateproj from '../images/project-imgs/handymateproj.png';
import bookstoreImg from '../images/project-imgs/bookstoreimg.png';
import mathMagiciansImg from '../images/project-imgs/mathMagicianimg.png';
import topMoviesImg from '../images/project-imgs/topmoviesimg.png';

const WorkSection = () => (
  <Container fluid className="p-5 my-4">
    <div className="works-title d-flex flex-lg-column flex-md-column">
      <h2 className="mb-3">My Recent Works</h2>
      <hr className="w-75 mt-4" />
    </div>
    <div className="projects mt-5">
      <Row className="justify-content-center align-items-center mb-3 g-3">
        <Col sm={12} md={6}>
          <Card className="work-card">
            <Card.Img variant="top" src={handymateproj} className="proj-img" />
            <Card.Body className="border-top">
              <Card.Title>Handymate</Card.Title>
              <Card.Text>
                HandyMate is a responsive we application where users can book a service, or
                cancel a booking. The user can also see the details of
                a service, ratings of the service.
              </Card.Text>
              <Button className="repo-btn" onClick={() => window.open('https://github.com/PrantoshB/HandyMate-Frontend', '_blank')}>See Project</Button>
              <Button
                className="demo-btn mx-3"
                onClick={() => window.open('https://deploy--fabulous-horse-dfd6cb.netlify.app/', '_blank')}
              >
                Live Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="work-card">
            <Card.Img variant="top" src={bookstoreImg} className="proj-img" />
            <Card.Body className="border-top">
              <Card.Title>Bookstore</Card.Title>
              <Card.Text>
                An application to make readers life easier by letting them track all
                the books they read.
              </Card.Text>
              <Button className="repo-btn" onClick={() => window.open('https://github.com/yetemegn-telaye/Bookstore', '_blank')}>See Project</Button>
              <Button className="demo-btn mx-3" onClick={() => window.open('https://your-bookstore.netlify.app/', '_blank')}>Live Demo</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center g-3">
        <Col sm={12} md={6}>
          <Card className="work-card">
            <Card.Img variant="top" src={mathMagiciansImg} className="proj-img" />
            <Card.Body className="border-top">
              <Card.Title>Math Magicians</Card.Title>
              <Card.Text>
                Math Magicians is a website
                for math fans to do mathematical calculations and read fun,
                useful math quotes.
              </Card.Text>
              <Button className="repo-btn" onClick={() => window.open('https://github.com/yetemegn-telaye/Math-Magicians', '_blank')}>See Project</Button>
              <Button className="demo-btn mx-3" onClick={() => window.open('https://math-magicians-d9b711.netlify.app/', '_blank')}>Live Demo</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card className="work-card">
            <Card.Img variant="top" src={topMoviesImg} className="proj-img" />
            <Card.Body className="border-top">
              <Card.Title>Top rated movies</Card.Title>
              <Card.Text>
                Displays top-rated movies starring women
                movies that you can like and add comment on.
              </Card.Text>
              <Button className="repo-btn" onClick={() => window.open('https://github.com/yetemegn-telaye/Top-rated-movies', '_blank')}>See Project</Button>
              <Button className="demo-btn mx-3" onClick={() => window.open('https://top-rated-movies-proj.netlify.app/', '_blank')}>Live Demo</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </Container>
);
export default WorkSection;
