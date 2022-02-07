import styled from "styled-components";

export default styled.a`
  display: inline-flex;
  place-content: center;
  padding: 0.5rem;
  text-decoration: none;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.bgBtn};
  color: ${({ theme }) => theme.color};

  &hover {
    color: ${({ theme }) => theme.bgBtn};
  }
`;
