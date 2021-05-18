import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import SideDrawer from "../../components/SideDrawer";
import { store as appStore } from "../../store";

const mockStore = configureStore();
let store;

describe("SideDrawer component should render without issues", () => {
  beforeEach(() => {
    const initialState = appStore.getState();
    store = mockStore(initialState);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <SideDrawer />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <SideDrawer />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
