import { FormattedMessage } from "react-intl";
import {
  Container,
  DescriptionContainer,
  CloseIcon,
  Label,
  Image,
  ImgContainer,
  FlavorTextContainer,
  FlavorTextTitle,
  FlavorTextEntries,
  Arrow,
} from "./PokemonDetails.styles";

const PokemonDetail = ({
  openFlavorTextEntries,
  pokemon,
  pokemonFLavorText,
  setSelectedPokemon,
  setOpenFlavorTextEntries,
}) => {
  const handleDescriptionClose = () => {
    setOpenFlavorTextEntries(false);
    setSelectedPokemon(null);
  };

  return (
    <Container>
      <DescriptionContainer
        openFlavorTextEntries={openFlavorTextEntries}
        pokemon={pokemon}
      >
        <CloseIcon onClick={handleDescriptionClose}>x</CloseIcon>
        <Label>
          <FormattedMessage id="name" />: <label>{pokemon?.name}</label>
        </Label>
        <Label>
          <FormattedMessage id="weight" />: <label>{pokemon?.weight}</label>
        </Label>
        <Label>
          <FormattedMessage id="height" />: <label>{pokemon?.height}</label>
        </Label>
        <Label>
          <FormattedMessage id="baseExperience" />:{" "}
          <label>{pokemon?.base_experience}</label>
        </Label>
        <ImgContainer>
          <Image
            src={pokemon?.sprites.other["dream_world"]["front_default"]}
            alt=""
          />
        </ImgContainer>
        <FlavorTextContainer>
          <FlavorTextTitle
            onClick={() => setOpenFlavorTextEntries(!openFlavorTextEntries)}
          >
            <FormattedMessage id="someFlavorTextEntries" />{" "}
            {openFlavorTextEntries ? (
              <Arrow>&#x2191;</Arrow>
            ) : (
              <Arrow>&#x2192;</Arrow>
            )}
          </FlavorTextTitle>
          <FlavorTextEntries openFlavorTextEntries={openFlavorTextEntries}>
            {pokemonFLavorText?.map((flavorText, i) => {
              return <div key={i}>{flavorText["flavor_text"]}</div>;
            })}
          </FlavorTextEntries>
        </FlavorTextContainer>
      </DescriptionContainer>
    </Container>
  );
};

export default PokemonDetail;
