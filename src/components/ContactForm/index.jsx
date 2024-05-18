import React, { useState } from "react";
import Button from "../Button";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  FormError,
  SuccessMessage,
} from "./styled";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.fullName.length < 3)
      newErrors.fullName = "Full name must be at least 3 characters.";
    if (formData.subject.length < 3)
      newErrors.subject = "Subject must be at least 3 characters.";
    if (!validateEmail(formData.email))
      newErrors.email = "Invalid email address.";
    if (formData.body.length < 3)
      newErrors.body = "Body must be at least 3 characters.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
      setErrors({});
      setSuccessMessage("Success! Thank you for your message.");
      // Reset form
      setFormData({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
    } else {
      setErrors(newErrors);
      setSuccessMessage("");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="fullName">Full Name</StyledLabel>
      {errors.fullName && <FormError>{errors.fullName}</FormError>}
      <StyledInput
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <StyledLabel htmlFor="subject">Subject</StyledLabel>
      {errors.subject && <FormError>{errors.subject}</FormError>}
      <StyledInput
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <StyledLabel htmlFor="email">Email</StyledLabel>
      {errors.email && <FormError>{errors.email}</FormError>}
      <StyledInput
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <StyledLabel htmlFor="body">Body</StyledLabel>
      {errors.body && <FormError>{errors.body}</FormError>}
      <StyledTextarea
        id="body"
        name="body"
        value={formData.body}
        onChange={handleChange}
        required
      />

      <Button type="submit" variant="primary">
        Submit
      </Button>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </StyledForm>
  );
};

export default ContactForm;
