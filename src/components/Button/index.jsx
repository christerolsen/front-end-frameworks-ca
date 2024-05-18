import React from "react";
import { StyledButton } from "./styled";

const Button = ({ children, variant, disabled, onClick }) => {
  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
