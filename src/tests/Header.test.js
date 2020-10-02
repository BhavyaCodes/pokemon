import React from "react";
import { render } from "@testing-library/react";

import Header from "../components/Header";

it("renders Header component without crashing", () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
