import React from "react";
import ContactForm from "../../components/ContactForm";
import Container from "../../components/Container";

const ContactPage = () => {
  document.title = "eComify | Contact";

  return (
    <>
      <Container>
        <h1>Contact us</h1>

        <ContactForm />
      </Container>
    </>
  );
};

export default ContactPage;
