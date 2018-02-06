import React from "react";
import { shallow } from "enzyme";

import {GuessList} from "./guess-list";

describe("<GuessList />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessList guesses={[]} />);
  });

  it("Generate a list of guesses", () => {
    const values = [10, 14, 41];
    const wrapper = shallow(<GuessList guesses={values} />);
    const guessItem = wrapper.find("li");

    expect(guessItem.length).toEqual(values.length);
  });
});