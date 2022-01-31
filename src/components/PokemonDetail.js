import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import styled from "styled-components";

const Container = styled.div`
  min-width: 340px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const DescriptionContainer =styled.div`
  background: #cbd5e1;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  height: 350px;
  overflow: hidden;
  position:relative;
  transition: all 400ms  ease-in-out ;
  width:${props => props.pokemon? '100%' : '0%'};
  &>div{
    white-space: nowrap;
  }
`;
const CloseIcon = styled.div`
  align-items: center;
  background-color: #334155;
  border-radius: 25px;
  box-shadow: -1px 4px 6px #94a3b8;
  color:#cbd5e1;
  cursor:pointer;
  display: flex;
  font-size: 13px;
  font-weight: 600;
  height: 20px;
  justify-content: center;
  position:absolute;
  right: 5px;
  top:5px;
  width: 20px;
`;

const Label = styled.div`
  font-family: monospace;
  font-size: 26px;
  font-weight: 600;
  margin: 10px;
`;

const Image = styled.img`
  height: 150px;
  margin: 10px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PokemonDetail = ({ pokemon, setSelectedPokemon }) => {
  return (
    <Container>
      <DescriptionContainer pokemon={pokemon}>
        <CloseIcon onClick={()=>setSelectedPokemon(null)}>x</CloseIcon>
        <Label>
          <FormattedMessage id="name" />: {pokemon?.name}
        </Label>
        <Label>
          <FormattedMessage id="weight" />: {pokemon?.weight}
        </Label>
        <Label>Altura: {pokemon?.height}</Label>
        <Label>Experiencia base: {pokemon?.base_experience}</Label>
        <ImgContainer>
          <Image
            src={pokemon?.sprites.other["dream_world"]["front_default"]}
            alt=""
          />
        </ImgContainer>
      </DescriptionContainer>
    </Container>
  );
};

export default PokemonDetail;
