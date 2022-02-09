import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  padding: 0.5rem;
  margin: 1rem;
  height: 50px;
`;

export const InnerContainer = styled.span`
  display: flex;
  align-items: center;
  padding: 0 1rem 0 1rem;
`;

export const LeftNav = styled.span`
  flex: 60%;
`;

export const RightNav = styled.span`
  flex: 40%;
  display: flex;
  justify-content: flex-end;
`;

export const LinkItem = styled(Link)`
  margin: 0px 15px 0px 2px;
  text-decoration: none;
  color: ${({ theme }) => theme.color};

  &:hover {
    color: ${({ theme }) => theme.bgBtn};
  }
`;
