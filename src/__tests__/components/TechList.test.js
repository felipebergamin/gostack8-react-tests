import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TechList from "~/components/TechList";

describe("TechList Component", () => {
  it("should be able to add new techs", () => {
    const { getByText, getByTestId, getByLabelText } = render(<TechList />);

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByLabelText("Tech")).toHaveValue("");
  });
});
