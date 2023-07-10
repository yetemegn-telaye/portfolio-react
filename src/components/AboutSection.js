import React from 'react';
import { Button, Container } from 'react-bootstrap';
import AboutImageDesktop from '../images/aboutImageDesktop.svg';

const AboutSection = () => (
  <Container fluid className="d-flex p-0 py-5 about-section">

    <div className="about-content-desc p-5 mx-5">
      <h2>About me</h2>
      <p className="w-75 py-4">
        Hello Im a software developer! I can help you build a product ,
        feature or website Look through some of my work and experience! If
        you like what you see and have a project you need coded, dont
        hestiate to contact me.
      </p>
      <Button className="resume-btn" type="button">Get My Resume</Button>
    </div>
    <img
      className="about-illustration-desktop"
      src={AboutImageDesktop}
      alt="desktop illustration for about section"
    />

    <hr />
  </Container>
);
export default AboutSection;
