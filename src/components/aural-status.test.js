import React from "react";
import { shallow } from "enzyme";

import {AuralStatus} from "./aural-status";

describe("<AuralStatus />", () => {
  it("Renders without crashing", () => {
    shallow(<AuralStatus />);
  });

  it("Renders an Aural Status", () => {
    let test = "Test status";

    let wrapper = shallow(<AuralStatus auralStatus={test} />);
    expect(wrapper.contains(test)).toEqual(true);
  });
});