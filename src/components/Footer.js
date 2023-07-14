import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin, faGithub, faAngellist, faTwitter, faMedium,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (

  <section className="footer-social-icons d-flex align-items-center justify-content-center p-4">

    <a href="https://www.linkedin.com/in/yetemegn-lemma/" className="mx-2">
      <FontAwesomeIcon icon={faLinkedin} size="xl" color="#D7C9AA" />
    </a>

    <a href="https://www.linkedin.com/in/yetemegn-lemma/" className="mx-2">
      <FontAwesomeIcon icon={faGithub} size="xl" color="#D7C9AA" />
    </a>

    <a href="https://www.linkedin.com/in/yetemegn-lemma/" className="mx-2">
      <FontAwesomeIcon icon={faAngellist} size="xl" color="#D7C9AA" />
    </a>

    <a href="https://www.linkedin.com/in/yetemegn-lemma/" className="mx-2">
      <FontAwesomeIcon icon={faTwitter} size="xl" color="#D7C9AA" />
    </a>

    <a href="https://www.linkedin.com/in/yetemegn-lemma/" className="mx-2">
      <FontAwesomeIcon icon={faMedium} size="xl" color="#D7C9AA" />
    </a>
  </section>

);

export default Footer;
