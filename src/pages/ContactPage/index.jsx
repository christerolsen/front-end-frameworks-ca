import React from "react";
import ContactForm from "../../components/ContactForm";

const ContactPage = () => {
  document.title = "eComify | Contact";

  return (
    <>
      <h1>Contact us</h1>
      <ContactForm />
    </>
  );
};

export default ContactPage;
