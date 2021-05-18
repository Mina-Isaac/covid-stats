import React from "react";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import TopBar from "../../components/TopBar";
import { store as appStore } from "../../store";

const mockStore = configureStore();
let store: any;

describe("TopBar component should render without issues", () => {
  beforeEach(() => {
    const initialState = appStore.getState();
    store = mockStore(initialState);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <TopBar />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <TopBar />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
