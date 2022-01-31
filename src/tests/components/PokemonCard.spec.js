import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PokemonCard from "../../components/PokemonCard";

const mockPokemonProps = {
  name: "ivysaur",
  url: "https://pokeapi.co/api/v2/pokemon/2/",
};

const onSelectMock = jest.fn();

describe("Test Pockemon Card", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should display the pokemon name", () => {
    const screen = render(
      <PokemonCard pokemon={mockPokemonProps} onSelect={onSelectMock} />
    );

    expect(screen.getByText("ivysaur")).toBeInTheDocument();
  });

  test("should call onSelect when the user click on some card", async () => {
    const screen = await render(
      <PokemonCard pokemon={mockPokemonProps} onSelect={onSelectMock} />
    );

    await userEvent.click(screen.getByText("ivysaur"));

    expect(onSelectMock).toBeCalled();
  });
});
