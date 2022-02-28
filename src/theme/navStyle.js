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
  border-radius: var(--border-radius);
  padding: 0 1rem 0 1rem;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const MobileInner = styled.span`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const MobileNavbarLink = styled(Link)`
  border-radius: var(--border-radius);
  text-decoration: none;
  text-align: right;
  width: calc(100% - 10%);
  padding: 0.3rem 0.3rem 0.3rem 0;
  color: ${({ theme }) => theme.color70};

  &:hover {
    color: ${({ theme }) => theme.bgBtn};
    background: linear-gradient(to left, ${({ theme }) => theme.bgOnHover}, transparent);
  }

  @media (any-hover: hover) and (any-pointer: fine) {
    a {
      color: ${({ theme }) => theme.bgBtn};
      background: linear-gradient(to left, ${({ theme }) => theme.bgOnHover}, transparent);
    }
  }
`;
