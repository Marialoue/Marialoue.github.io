import styled from "styled-components";

export const Container = styled.section`
  color: ${({ theme }) => theme.color};
  padding: 1rem;
  margin: 0.5rem;
`;

export const SmallContainer = styled.section`
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-wrap: wrap;
  place-content: space-evenly;
  padding: 0.2rem;
  margin: 0.2rem;
  
  p {
    margin: 0.2rem;
  }

  svg {
    stroke: ${({ theme }) => theme.bgBtn};
  }
`;
