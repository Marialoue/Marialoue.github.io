import styled from "styled-components";

export default styled.span`
  background: ${({ theme }) => theme.bgBtn};
  color: ${({ theme }) => theme.colorBtn};
  font-size: 14px;
  border-radius: var(--border-radius);
  padding: 0.3rem;
  margin: 0.2rem;
`;
