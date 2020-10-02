import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PokeCard from "../components/PokeCard";

it("renders PokeCard component without crashing", () => {
  const mockPokemon = {
    id: 1,
    name: "Mock Pokemon Name",
    imageUrl: "mock-url",
    weight: 1000,
    types: ["mock type 1", "mock type 2"],
  };

  const { asFragment } = render(<PokeCard pokemon={mockPokemon} />);
  expect(asFragment()).toMatchSnapshot();
});

it("renders PokeCard component without types if not passed", () => {
  const mockPokemon = {
    id: 1,
    name: "Mock Pokemon Name",
    imageUrl: "mock-url",
    weight: 1000,
  };

  const { asFragment } = render(<PokeCard pokemon={mockPokemon} />);
  expect(asFragment()).toMatchSnapshot();
});
