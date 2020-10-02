import React from "react";
import { render } from "@testing-library/react";

import CardList from "../components/CardList";

it("renders CardList component without crashing", () => {
  const { asFragment } = render(<CardList />);
  expect(asFragment()).toMatchSnapshot();
});
