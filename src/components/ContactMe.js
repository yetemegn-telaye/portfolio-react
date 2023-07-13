import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wrwrx1n', 'template_20a4qgw', form.current, 'l2uDpBhzXwXLjdziX')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <Container className="contact-section d-flex flex-column flex-md-column flex-lg-row p-5">

      <h3 className="contact-h3 w-50 mx-5 mt-4">
        I always interested in hearing about new projects, so if youd
        like to chat please get in touch.
      </h3>

      <form ref={form} onSubmit={sendEmail} className="d-flex flex-column w-100">

        <input type="text" name="user_name" className="my-4 border-0 border-bottom p-3" placeholder="Full name" />

        <input type="email" name="user_email" className="mb-4 border-0 border-bottom p-3" placeholder="Email" />

        <textarea name="message" className="mb-4 border-0 border-bottom p-3" placeholder="Enter your message" />

        <input type="submit" value="Send" className="w-25 btn resume-btn" />
      </form>

    </Container>
  );
};
export default ContactMe;
