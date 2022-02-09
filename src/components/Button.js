import styled from "styled-components";

export default styled.button`
  display: inline-flex;
  place-content: center;
  padding: 0.5rem;
  margin: 0.2rem;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.bgBtn50};
  color: ${({ theme }) => theme.bgBtn50};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.bg40};
    border: 2px solid ${({ theme }) => theme.bgBtn};
    svg {
      stroke: ${({ theme }) => theme.bgBtn};
    }
  }
`;
