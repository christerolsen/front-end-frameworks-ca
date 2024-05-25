import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  position: relative;
  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const CartBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  padding: 0.3rem 0.3rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  font-size: 0.5rem;
`;
