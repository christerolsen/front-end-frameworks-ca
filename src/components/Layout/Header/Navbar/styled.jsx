import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.nav`
  font-family: ${({ theme }) => theme.fonts.cta};
`;

export const Logo = styled(Link)``;

export const NavUl = styled.ul``;

export const NavItem = styled.li``;

export const StyledLink = styled(NavLink)``;
