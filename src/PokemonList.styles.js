import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  min-height: 200px;
  position: relative;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const spinerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const SpinerLoader = styled.div`
  animation-name: ${spinerAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #1e293b;
  border-radius: 47%;
  height: 36px;
  left: 50%;
  position: absolute;
  top: 50%;
  width: 36px;
`;

export const CardsAndNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
