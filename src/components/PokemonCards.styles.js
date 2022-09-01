import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => (props.selected ? "#d1d5db" : "#f9fafb")};
  border: 2px solid #334155;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0px;
  position: relative;
  width: 180px;
  height: 230px;
  @media (max-width: 1024px) {
    height: 300px;
    width: 99%;
    & > div:nth-child(1) {
      transform: ${(props) => props.selected && "rotateY(180deg)"};
    }
    & > div:nth-child(2) {
      transform: ${(props) => props.selected && "rotateY(0deg)"};
    }
  }
`;

const BaseCardStyles = styled.div`
  @media (max-width: 1024px) {
    backface-visibility: hidden;
    position: absolute;
    transform: rotateY(0deg);
    transform-style: preserve-3d;
    transition: 0.5s cubic-bezier(0.4, 0.2, 0.2, 1);
    width: 100%;
  }
`;

export const ListCard = styled(BaseCardStyles)`
  @media (max-width: 1024px) {
    transform: rotateY(0deg);
  }
`;

export const DetailCard = styled(BaseCardStyles)`
  display: none;
  @media (max-width: 1024px) {
    background-color: #cbd5e1;
    color: black;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    transform: rotateY(180deg);
  }
`;

export const Name = styled.label`
  color: #0f172a;
  display: flex;
  font-family: monospace;
  font-size: 24px;
  font-weight: 600;
  justify-content: center;
  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  height: 185px;
  width: 185px;
  @media (max-width: 1024px) {
    height: 300px;
    width: 300px;
  }
`;

export const Label = styled.div`
  font-family: monospace;
  font-size: 30px;
  font-weight: 600;
  padding: 8px;
`;

export const DetailImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DetailImage = styled.img`
  height: 135px;
  margin: 15px;
`;

export const MorePokemonInfo = styled.div`
  display: none;
  @media (max-width: 1024px) {
    color: #0c4a6e;
    display: flex;
    font-family: monospace;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
  }
`;
