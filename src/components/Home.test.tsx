import React from "react";
import { render } from "@testing-library/react";
import { Home } from "./Home";

test("Home had greeting", () => {
  const { queryByText } = render(<Home />);
  expect(queryByText(/video/)).not.toBeNull();
});
