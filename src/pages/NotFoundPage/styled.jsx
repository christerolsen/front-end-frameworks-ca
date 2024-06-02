// /src/pages/NotFoundPage/styled.jsx

import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  margin: 0;
`;

export const NotFoundSubtitle = styled.h2`
  margin: 0 0 1rem 0;
`;

export const NotFoundImage = styled.img`
  max-width: 300px;
  height: auto;
  margin: 2rem 0;
  filter: drop-shadow(-4px 4px 1px rgba(44, 62, 80, 0.5));
`;
