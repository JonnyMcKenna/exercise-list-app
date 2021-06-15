import React from "react";
import App from "../../App";
import { render } from "@testing-library/react";

describe("App", () => {
  it("should render when still loading", () => {
    const appElement = render(<App />).baseElement;
    expect(appElement).toMatchSnapshot();
    expect(appElement).toHaveTextContent("Loading...");
  });
});
