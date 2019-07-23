import React from "react";
import { shallow } from "enzyme";
import App from ".";

describe("App component", () => {
  it("render App component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
