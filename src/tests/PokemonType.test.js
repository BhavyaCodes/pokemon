import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PokemonType from "../components/PokemonType";

it("renders PokemonType component without crashing", () => {
  const mockType = "normal";

  const { asFragment, getByTestId } = render(<PokemonType type={mockType} />);
  expect(asFragment()).toMatchSnapshot();
  expect(getByTestId("pokemon-type-normal")).toHaveTextContent("normal");
});

it("renders null if type is not defined", () => {
  const { asFragment } = render(<PokemonType />);
  expect(asFragment()).toMatchSnapshot();
});
