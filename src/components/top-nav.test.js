import React from "react";
import { shallow } from "enzyme";

import { TopNav } from "./top-nav";
import { RESTART_GAME, GENERATE_AURAL_UPDATE} from "../actions"

describe("<TopNav />", () => {
  it("Renders without crashing", () => {
    shallow(<TopNav />);
  });

  it("Should dispatch restartGame when new game is clicked", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const newGame = wrapper.find(".new");

    newGame.simulate("click")
    expect(dispatch).toHaveBeenCalled();
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toEqual(RESTART_GAME)
  });

  it("Should dispatch generateAuralStatus when new game is clicked", () => {
      const dispatch = jest.fn(); 
      const wrapper = shallow(<TopNav dispatch={dispatch} />);
      const auralStatus = wrapper.find(".status-link");

      auralStatus.simulate('click')
      expect(dispatch).toHaveBeenCalled();
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toEqual(GENERATE_AURAL_UPDATE)
  })
});