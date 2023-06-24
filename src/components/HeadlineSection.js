import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin, faGithub, faAngellist, faTwitter, faMedium,
} from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import illustrationHeader from '../images/illustrationHeader.png';

const HeadlineSection = () => (
  <Container fluid className="p-0 headline-section">
    <div className="d-flex flex-column flex-lg-row flex-md-row mt-5">
      <div className="p-4 d-flex flex-column-reverse flex-lg-row flex-md-row">
        <div className="d-flex flex-row flex-lg-column flex-md-column p-5 mt-5">
          <a href="https://www.linkedin.com/in/yetemegn-lemma/" className="social-icon m-2">
            <FontAwesomeIcon icon={faLinkedin} size="xl" color="#D7C9AA" />
          </a>
          <a href="https://www.linkedin.com/in/yetemegn-lemma/" className="social-icon m-2">
            <FontAwesomeIcon icon={faGithub} size="xl" color="#D7C9AA" />
          </a>
          <a href="https://www.linkedin.com/in/yetemegn-lemma/" className="social-icon m-2">
            <FontAwesomeIcon icon={faAngellist} size="xl" color="#D7C9AA" />
          </a>
          <a href="https://www.linkedin.com/in/yetemegn-lemma/" className="social-icon m-2">
            <FontAwesomeIcon icon={faTwitter} size="xl" color="#D7C9AA" />
          </a>
          <a href="https://www.linkedin.com/in/yetemegn-lemma/" className="social-icon m-2">
            <FontAwesomeIcon icon={faMedium} size="xl" color="#D7C9AA" />
          </a>
        </div>
        <div className="headline-intro py-4 mt-5">
          <h1 className="headline-title">
            Hey There.
            <br />
            I`m Yetemegn
          </h1>
          <div className="mt-2">
            <p className="sub-title mb-2">I`am a Full-stack Developer</p>
            <p className="intro">
              I can help you build a product , feature or website Look through
              some of my work and experience! If you like what you see and have
              a project you need coded, don’t hestiate to contact me.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={illustrationHeader} alt="illustration-header" className="img-fluid" />
      </div>
    </div>
  </Container>
);
export default HeadlineSection;
