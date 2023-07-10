import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const ContactMe = () => {
  const formHandler = (event) => {
    event.preventDefault();
    alert('You have submitted a form');
  };
  return (
    <Container className="contact-section d-flex flex-column flex-md-column flex-lg-row p-5">

      <h3 className="contact-h3 w-50 mx-5 mt-4">
        I always interested in hearing about new projects, so if youd
        like to chat please get in touch.
      </h3>

      <form
        action="https://formspree.io/f/mgeqvoyy"
        method="POST"
        className="contact-form w-50 mx-5 d-flex flex-column"
        onSubmit={formHandler}
        id="contactForm"
      >
        <input
          type="text"
          name="name"
          placeholder="Full name"
          maxLength="30"
          className="contactInput mb-4 p-3 border-0 border-bottom"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="contactInput mb-4 p-3 border-0 border-bottom"
          required
        />
        <span id="error-msg" />
        <textarea
          name="message"
          rows="4"
          placeholder="Enter text here"
          maxLength="500"
          className="contactInput mb-4 border-0 p-3"
          required
        />
        <Button type="submit" className="repo-btn w-50">Get in touch</Button>
      </form>

    </Container>
  );
};
export default ContactMe;
