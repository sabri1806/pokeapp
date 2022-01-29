import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPokemonDetail } from "..//services/pokemon.service";

const Container = styled.div`
  background-color: #f9fafb;
  border: 2px solid #334155;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0px;
  position: relative;
  width: 180px;
  height: 200px;
  &>div:nth-child(1){
    transform: ${props => props.selected && 'rotateY(180deg)'}; 
  }
  &>div:nth-child(2){
    transform: ${props => props.selected && 'rotateY(0deg)'};
  };
  @media (max-width: 1024px) {
    width: 99%;
    height: 300px;
  }
`;

const BaseCardStyles = styled.div`
  backface-visibility: hidden;
  position: absolute;
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  transition: 0.5s cubic-bezier(0.4, 0.2, 0.2, 1);
  width:100%;
`;

const ListCard = styled(BaseCardStyles)`
  transform: rotateY(0deg);
`;

const DetailCard =styled(BaseCardStyles)`
  background-color: red;
  color: black;
  display:flex;
  height: 100%;
  justify-content: center;
  transform: rotateY(180deg);
`;

const Name = styled.label`
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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 185px;
  width: 185px;
  @media (max-width: 1024px) {
    height: 300px;
    width: 300px;
  }
`;

const PokemonCard = ({ pokemon, onSelect, selected }) => {
  const [pokemonVal, setPokemonVal] = useState(null);

  useEffect(() => {
    if (pokemon.url) {
      getPokemonDetail(pokemon.url).then(({ data }) => {
        setPokemonVal(data); 
      });
    }
  }, [pokemon]);

  return (
    <Container selected={selected} onClick={() => onSelect(pokemonVal)}>
      <ListCard>
        <Name>{pokemon.name}</Name>
        <ImageContainer>
          <Image
            src={pokemonVal?.sprites.other["official-artwork"]["front_default"]}
          />
        </ImageContainer>
      </ListCard>
      <DetailCard>
        Descripcion
      </DetailCard>
    </Container>
  );
}; 

export default PokemonCard;
