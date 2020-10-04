import React from "react";
import { render } from "@testing-library/react";

import Footer from "../components/Footer";

it("renders Footer component without crashing", () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
