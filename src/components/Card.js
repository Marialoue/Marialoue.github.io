import styled from "styled-components";

export default styled.article`
  display: grid;
  background: ${({ theme }) => theme.bgSoft};
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  transition: ${({ theme }) => theme.transition};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

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
