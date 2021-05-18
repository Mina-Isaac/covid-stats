import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { store as appStore } from "../../store";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "../../App";
import renderer from "react-test-renderer";
import { sampleCasesResponse, sampleIncidenceResponse } from "../fixtures";

const mockStore = configureStore(getDefaultMiddleware());
let store: any;



const serverHandlers = [
  rest.get(
    "https://api.corona-zahlen.org/districts/:ags/history/cases/:count",
    (req, res, ctx) => {
      return res(ctx.json(sampleCasesResponse));
    }
  ),
  rest.get(
    "https://api.corona-zahlen.org/districts/:AGS/history/incidence/:count",
    (req, res, ctx) => {
      return res(ctx.json(sampleIncidenceResponse));
    }
  ),
];

const server = setupServer(...serverHandlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App should render without issues", () => {
  const initialState = appStore.getState()
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
