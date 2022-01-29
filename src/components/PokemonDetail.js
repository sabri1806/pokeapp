import { useEffect, useState } from "react";

import styled from "styled-components";

const Container = styled.div`
  background: #cbd5e1;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 100%;
  min-width: 340px;
  @media (max-width: 1024px) {
  display: none;
  }
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

const PokemonDetail = ({ pokemon }) => {

  return ( 
    <Container>
      <Label>Nombre: {pokemon?.name}</Label>
      <Label>Peso: {pokemon?.weight}</Label>
      <Label>Altura: {pokemon?.height}</Label>
      <Label>Experiencia base: {pokemon?.base_experience}</Label>
      <ImgContainer>
        <Image src={pokemon?.sprites.other["dream_world"]["front_default"]} alt=""/>
      </ImgContainer>
      
    </Container>
  );
};

export default PokemonDetail;
