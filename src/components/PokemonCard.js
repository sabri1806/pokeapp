import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 300px;
`;

const Name = styled.label`
  font-size: 24px;
`;

const PokemonCard = ({ pokemon, onSelect }) => {
  return (
    <Container onClick={() => onSelect(pokemon.url)}>
      <Name>{pokemon.name}</Name>
    </Container>
  );
};

export default PokemonCard;
