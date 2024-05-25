import React from "react";
import { ErrorContainer, ErrorMessage } from "./styled";

const Error = ({ message }) => {
  return (
    <>
      <ErrorContainer>
        <ErrorMessage>{message}</ErrorMessage>
      </ErrorContainer>
    </>
  );
};

export default Error;
