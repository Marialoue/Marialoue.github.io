import styled from "styled-components";

export default styled.article`
  display: grid;
  background: ${({ theme }) => theme.bgSoft};
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.boxShadowSoft};

  section {
    place-content: space-evenly;
  }

  img {
    width: 20vmin;
  }

  h3 {
    font-weight: ${({ theme }) => theme.fontWeight};
    letter-spacing: ${({ theme }) => theme.letterSpacing};
  }

  &:hover {
    background: ${({ theme }) => theme.bgOnHover};
    // border: ${({ theme }) => theme.border};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;
