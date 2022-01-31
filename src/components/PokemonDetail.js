import { FormattedMessage } from "react-intl";

import styled from "styled-components";

const Container = styled.div`
  width: 340px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const DescriptionContainer = styled.div`
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
const CloseIcon = styled.div`
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

const Label = styled.div`
  font-family: monospace;
  font-size: 22px;
  font-weight: 600;
  padding: 8px;
`;

const Image = styled.img`
  height: 150px;
  margin: 10px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FlavorTextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FlavorTextTitle = styled.div`
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

const FlavorTextEntries = styled.div`
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
            <FormattedMessage id="someFlavorTextEntries" />
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
