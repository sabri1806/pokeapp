import styled from "styled-components";

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px;
  & > div {
    display: flex;
    font-family: monospace;
    font-size: 26px;
    font-weight: 600;
    padding: 0 60px;
    white-space: nowrap;
  }
  @media (max-width: 1024px) {
    padding: 20px 5px;
  }
`;

export const Select = styled.select`
  font-family: monospace;
  font-size: 16px;
  position: absolute;
  left: 9px;
  @media (max-width: 425px) {
    left: 1px;
    top: 3px;
  }
`;
