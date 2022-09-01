import styled from "styled-components";

export const Container = styled.div`
  width: 340px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const DescriptionContainer = styled.div`
  background: #cbd5e1;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  height: 380px;
  overflow: ${(props) => (props.openFlavorTextEntries ? "visible" : "hidden")};
  position: relative;
  transition: all 200ms ease-in-out;
  width: ${(props) => (props.pokemon ? "100%" : "0%")};
  & > div {
    white-space: nowrap;
  }
`;

export const CloseIcon = styled.div`
  align-items: center;
  background-color: #334155;
  border-radius: 25px;
  box-shadow: -1px 4px 6px #94a3b8;
  color: #cbd5e1;
  cursor: pointer;
  display: flex;
  font-family: monospace;
  font-size: 13px;
  font-weight: 600;
  height: 20px;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
`;

export const Label = styled.div`
  font-family: monospace;
  font-size: 22px;
  font-weight: 600;
  padding: 8px;
`;

export const Image = styled.img`
  height: 150px;
  margin: 10px;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FlavorTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FlavorTextTitle = styled.div`
  align-items: center;
  background-color: #94a3b8;
  border-radius: 4px;
  cursor: pointer;
  font-family: monospace;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
`;

export const FlavorTextEntries = styled.div`
  background-color: #94a3b8;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  height: ${(props) => (props.openFlavorTextEntries ? "150px" : "0px")};
  margin-bottom: 20px;
  overflow-y: scroll;
  position: relative;
  transition: all 400ms ease-in-out;
  width: 100%;
  & > div {
    background: #cbd5e1;
    border-radius: 8px;
    display: flex;
    font-family: monospace;
    margin: 6px;
    padding: 5px 5px;
    white-space: normal;
  }
`;

export const Arrow = styled.label`
  color: #0284c7;
  font-size: 32px;
  margin-left: 10px;
`;
