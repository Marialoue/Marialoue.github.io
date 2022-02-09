import styled from "styled-components";

export default styled.h2`
  display: flex;
  margin: .8rem;
  text-align: center;
  place-content: center;
  font-weight: ${({ theme }) => theme.fontWeight};
  letter-spacing: ${({ theme }) => theme.letterSpacing};
`;
