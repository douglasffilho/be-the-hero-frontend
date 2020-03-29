import React from "react";
import { toMatchSnapshot } from "jest-snapshot";
import { render } from "@testing-library/react";
import Home from "./Home";

expect.extend({ toMatchSnapshot });

it("should render Home component", () => {
    const homeComponent = render(<Home />);
    expect(homeComponent).toMatchSnapshot();
});
