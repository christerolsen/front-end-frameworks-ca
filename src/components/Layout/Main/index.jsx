import React from "react";
import { Outlet } from "react-router-dom";
import { StyledMain } from "./styled";

const Main = () => {
  return (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );
};

export default Main;
