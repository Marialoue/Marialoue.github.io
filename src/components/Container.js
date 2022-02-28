import styled from "styled-components";

export const Container = styled.section`
  color: ${({ theme }) => theme.color};
  padding: 1rem;
  margin: 0.5rem;
`;

export const MediumContainer = styled.section`
  color: ${({ theme }) => theme.color};
  padding: 2rem;
  margin: 2rem;
  text-align: center;
`;

export const SmallContainer = styled.section`
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-wrap: wrap;
  padding: 0.2rem;
  margin: 0.2rem;

  p {
    margin: 0.2rem;
  }

  svg {
    stroke: ${({ theme }) => theme.bgBtn};
  }
`;
