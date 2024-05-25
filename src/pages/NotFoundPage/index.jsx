import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/index.jsx";
import confusedImage from "../../assets/404_confused.png";
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundSubtitle,
  NotFoundImage,
} from "./styled.jsx";

const NotFoundPage = () => {
  return (
    <>
      <NotFoundContainer>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>Oops! Page not found.</NotFoundSubtitle>
        <NotFoundImage src={confusedImage} alt="Confused illustration" />
        <p>We can't find the page you're looking for.</p>
        <Link to={`/`}>
          <Button variant="accent">Go back to Home</Button>
        </Link>
      </NotFoundContainer>
    </>
  );
};

export default NotFoundPage;
