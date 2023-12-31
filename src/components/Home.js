import React from 'react';
import { Container } from 'react-bootstrap';
import HeadlineSection from './HeadlineSection';
import Footer from './Footer';
import WorkSection from './WorkSection';
import AboutSection from './AboutSection';
import ContactMe from './ContactMe';

const Home = () => (
  <Container fluid className="home-container d-flex flex-column justify-content-between p-0">
    <HeadlineSection />
    <WorkSection />
    <AboutSection />
    <ContactMe />
    <Footer />
  </Container>
);
export default Home;
