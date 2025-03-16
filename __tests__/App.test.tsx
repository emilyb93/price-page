import React from "react";

import { render, screen } from "@testing-library/react";
import App from "../src/App";
test("renders three plan titles to the page", async () => {
  render(<App />);

  await screen.findByText("Free");
  await screen.findByText("Professional");
  await screen.findByText("Enterprise");
});
