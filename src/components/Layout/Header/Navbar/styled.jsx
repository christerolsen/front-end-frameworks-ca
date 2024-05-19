import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.cta};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: bold;

  & svg {
    display: none;
  }

  @media (max-width: 500px) {
    & span {
      display: none;
    }

    & svg {
      display: block;
    }
  }
`;

export const NavUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavItem = styled.li`
  padding: 0 2rem;

  & a:hover {
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    font-weight: bold;
  }
`;
