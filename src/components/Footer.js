import styled from "styled-components";

const FooterConteriner = styled.footer`
  color: ${({ theme }) => theme.color40};
  text-align: center;
  user-select: none;
  margin-top: auto;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Footer = () => {
  return (
    <FooterConteriner>
      {"Copyright © Maria Karlsson "}
      {new Date().getFullYear()}
    </FooterConteriner>
  );
};

export default Footer;
