import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export const NavbarContainer = styled.nav`
  height: ${(props) => (props.isExtended ? "max-content" : "50px")};
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  margin: 0.5rem;

  @media (min-width: 700px) {
    padding: 0.5rem;
    margin: 1rem;
  }
`;

export const InnerContainer = styled.span`
  display: flex;
  align-items: center;
  padding: 0 1rem 0 1rem;
`;

export const LeftNav = styled.span`
  flex: 70%;
`;

export const RightNav = styled.span`
  flex: 30%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const LinkItem = styled(Link)`
  margin: 0px 15px 0px 2px;
  text-decoration: none;
  color: ${({ theme }) => theme.color};

  &:hover {
    color: ${({ theme }) => theme.bgBtn};
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

// Navbar for small devices
export const MenuButton = styled(Button)`
  @media (min-width: 700px) {
    display: none;
  }
`;

export const MobileNavbar = styled.nav`
  border-radius: 5px;

  @media (min-width: 700px) {
    display: none;
  }

  a {
    margin-bottom: 0.3rem;

    &:hover: {
      background: ${({ theme }) => theme.bgOnHover};
    }
  }
`;

export const MobileInner = styled.span`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 0.5rem;
`;

export const MobileNavbarLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color70}; 
  // #232323d4
  // #f5f5f5bf

  &:hover {
    color: ${({ theme }) => theme.bgBtn};
  }
`;
