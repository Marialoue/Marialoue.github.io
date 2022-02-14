import styled from "styled-components";

export default styled.img`
  border: 2px solid ${({ theme }) => theme.bgBtn};
  padding: 0.2rem;
  height: 29vmax;
  border-radius: 50%;
  transform: scaleX(-1);
  user-select: none;
  margin: 0 auto 0 auto;
`;
