import { render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import es from "../../translations/es.json";
import en from "../../translations/en.json";
import PokemonDetail from "../../components/PokemonDetail";

const languages = {
  es,
  en,
};

const pokemonMock = {
  name: "sandshrew",
  weight: "120",
  height: "6",
  base_experience: "60",
  sprites: {
    other: {
      dream_world: {
        front_default: "",
      },
    },
  },
};

describe("Test Pockemon Detail", () => {
  test("should display pokemon basic info", () => {
    const screen = render(
      <IntlProvider locale="es" messages={languages["es"]}>
        <PokemonDetail pokemon={pokemonMock} />
      </IntlProvider>
    );

    expect(screen.getByText("sandshrew")).toBeInTheDocument();
    expect(screen.getByText("120")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("60")).toBeInTheDocument();
  });
});
