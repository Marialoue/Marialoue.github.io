import styled from "styled-components";

export default styled.button`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.bgBtn};
  border-radius: 50%;
  padding: .5rem;
  color: ${({ theme }) => theme.colorBtn};
`;
