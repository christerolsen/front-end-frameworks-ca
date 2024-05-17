import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.background};
  }
`;
