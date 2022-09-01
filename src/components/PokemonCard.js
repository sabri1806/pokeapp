import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { getPokemonDetail } from "..//services/pokemon.service";
import {
  Container,
  ListCard,
  DetailCard,
  Name,
  ImageContainer,
  Image,
  Label,
  DetailImgContainer,
  DetailImage,
  MorePokemonInfo,
} from "./PokemonCards.styles";

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
          <FormattedMessage id="clickHereForMoreInfo" />
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
          <FormattedMessage id="height" />: {selectedPokemonData?.height}
        </Label>
        <Label>
          <FormattedMessage id="baseExperience" />:{" "}
          {selectedPokemonData?.base_experience}
        </Label>
        <DetailImgContainer>
          <DetailImage
            src={
              selectedPokemonData?.sprites.other["dream_world"]["front_default"]
            }
            alt=""
          />
        </DetailImgContainer>
      </DetailCard>
    </Container>
  );
};

export default PokemonCard;
