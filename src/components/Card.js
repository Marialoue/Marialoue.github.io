import styled from "styled-components";

export default styled.article`
  background: ${({ theme }) => theme.bgSoft};
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: ${({ theme }) => theme.transition};

  img {
    width: 20vmin;
  }

  h3 {
    font-weight: ${({ theme }) => theme.fontWeight};
    letter-spacing: ${({ theme }) => theme.letterSpacing};
  }

  &:hover {
    border: ${({ theme }) => theme.border};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;
