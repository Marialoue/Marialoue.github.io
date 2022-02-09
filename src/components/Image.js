import styled from "styled-components";

export default styled.img`
  border: 2px solid ${({ theme }) => theme.bgBtn};
  padding: 0.2rem;
  height: 27vmax;
  border-radius: 50%;
  grid-column: end;
  // transform: scaleX(-1);
  user-select: none;
`;
