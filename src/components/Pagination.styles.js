import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background: black;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1024px) {
    background-color: transparent;
    height: 50px;
  }
`;

const Nav = styled.button`
  background: #3f3f46;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 40px;
  font-weight: 600;
  width: 330px;
  &:disabled {
    color: #71717a;
    cursor: not-allowed;
  }
  @media (max-width: 1024px) {
    bottom: 0px;
    position: fixed;
    width: 33%;
    z-index: 1;
  }
`;

export const NextNav = styled(Nav)`
  right: 0px;
`;

export const PrevNav = styled(Nav)`
  left: 0px;
`;

export const PageNumber = styled.div`
  background-color: #374151;
  border-radius: 5px;
  color: white;
  display: flex;
  font-family: monospace;
  font-size: 20px;
  font-weight: 600;
  justify-content: center;
  padding: 0 10px;
  @media (max-width: 1024px) {
    bottom: 0px;
    font-size: 40px;
    height: 50px;
    position: fixed;
    width: 100%;
    z-index: 0;
  }
`;
