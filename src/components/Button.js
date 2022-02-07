import styled from "styled-components";

export default styled.button`
  background: transparent;
  border: none;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colorBtn};
  cursor: pointer;
`;
