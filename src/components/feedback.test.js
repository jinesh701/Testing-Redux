import React from "react";
import { shallow } from "enzyme";

import {Feedback} from "./feedback";

describe("<Feedback />", () => {
  it("Renders without crashing", () => {
    shallow(<Feedback />);
  });

  it("Generates feedback", () => {
    let test = "Test feedback";

    let wrapper = shallow(<Feedback feedback={test} />);

    expect(wrapper.contains(test)).toEqual(true);
  });
});