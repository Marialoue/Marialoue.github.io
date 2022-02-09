import styled from "styled-components";

export default styled.footer`
  color: ${({ theme }) => theme.color40};
  position: absolute;
  width: 100vmax;
  display: flex;
  place-content: center;
  user-select: none;
`;
