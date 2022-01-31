import { render } from "@testing-library/react";
import Pagination from "../../components/Pagination";

const mockPage = {
  offset: 5,
  size: 5,
  prevPage: null,
  nexPage: "https://pokeapi.co/api/v2/pokemon/?offset=5&limit=5",
};

const onChangePageMock = jest.fn();

describe("Test Pagination Component", () => {
  test("Validate go to prev page is disabled when on first page", () => {
    const screen = render(
      <Pagination
        initialPage={mockPage}
        prevPage={null}
        onChangePage={onChangePageMock}
      />
    );

    expect(screen.getByText("<")).toBeDisabled();
  });

  test("Validate go to next page is disabled when on last page", () => {
    const screen = render(
      <Pagination
        initialPage={mockPage}
        nextPage={null}
        onChangePage={onChangePageMock}
      />
    );

    expect(screen.getByText(">")).toBeDisabled();
  });
});
