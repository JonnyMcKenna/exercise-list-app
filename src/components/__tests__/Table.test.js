import React from "react";
import Table from "../Table";
import { render } from "@testing-library/react";

describe("Table", () => {
  it("should render when exercises array is not empty", () => {
    const exercises = [
      {
        id: "123",
        name: "name",
        transcript: "transcript",
        male: { image: "image" },
        female: { image: "image" },
      },
    ];
    const appElement = render(<Table exercises={exercises} />).baseElement;
    expect(appElement).toMatchSnapshot();
    expect(appElement).toHaveTextContent("View Instructions");
  });

  it("should not render when exercises array is empty", () => {
    const exercises = [];
    const appElement = render(<Table exercises={exercises} />).baseElement;
    expect(appElement).toMatchSnapshot();
  });
});
