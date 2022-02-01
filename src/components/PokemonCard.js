import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { getPokemonDetail } from "..//services/pokemon.service";

const Container = styled.div`
  background-color: ${props => props.selected ? '#d1d5db' : '#f9fafb' };
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
    &>div:nth-child(1){
    transform: ${props => props.selected && 'rotateY(180deg)'}; 
    }
    &>div:nth-child(2){
    transform: ${props => props.selected && 'rotateY(0deg)'};
    };
  }
`;

const BaseCardStyles = styled.div`
  @media (max-width: 1024px) {
    backface-visibility: hidden;
    position: absolute;
    transform: rotateY(0deg);
    transform-style: preserve-3d;
    transition: 0.5s cubic-bezier(0.4, 0.2, 0.2, 1);
    width:100%;
}
`;

const ListCard = styled(BaseCardStyles)`
  @media (max-width: 1024px) {
    transform: rotateY(0deg);
  }
`;

const DetailCard =styled(BaseCardStyles)`
  display:none;
  @media (max-width: 1024px) {
    background-color: #cbd5e1;
    color: black;
    display:flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    transform: rotateY(180deg);
  }
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

const Label = styled.div`
  font-family: monospace;
  font-size: 30px;
  font-weight: 600;
  padding: 8px;
`;

const DetailImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailImage = styled.img`
  height: 135px;
  margin: 15px;
`;

const MorePokemonInfo = styled.div`
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


const PokemonCard = ({ pokemon, onSelect, selected, selectedPokemonData }) => {
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
        <MorePokemonInfo>
          <FormattedMessage id="clickHereForMoreInfo"/>
        </MorePokemonInfo>
      </ListCard>
      <DetailCard>
        <Label>
          <FormattedMessage id="name" />: {selectedPokemonData?.name}
        </Label>
        <Label>
          <FormattedMessage id="weight" />: {selectedPokemonData?.weight}
        </Label>
        <Label>
          <FormattedMessage id="height" />: {selectedPokemonData?.height}</Label>
        <Label>
          <FormattedMessage id="baseExperience" />: {selectedPokemonData?.base_experience}
        </Label>
        <DetailImgContainer>
          <DetailImage
            src={selectedPokemonData?.sprites.other["dream_world"]["front_default"]}
            alt=""
          />
        </DetailImgContainer>
      </DetailCard>
    </Container>
  );
}; 

export default PokemonCard;