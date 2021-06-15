import React from "react";
import TableData from "../TableData";
import { render } from "@testing-library/react";

describe("TableData", () => {
  it("should render the specific exercise", () => {
    const exercise = [
      {
        id: "123",
        name: "name",
        transcript: "transcript",
        male: { image: "image" },
        female: { image: "image" },
      },
    ];
    const appElement = render(
      <TableData exercise={exercise} gender="male" />
    ).baseElement;
    expect(appElement).toMatchSnapshot();
    expect(appElement).toHaveTextContent("View Instructions");
  });
});
