import React from "react";
import { Provider } from "react-redux";
import { store as appStore } from "../../store/index";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor } from "@testing-library/react";
import App from "../../App";
import { sampleCasesResponse, sampleIncidenceResponse } from "../fixtures";
import configureStore from "redux-mock-store";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore(getDefaultMiddleware());

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

test("Chart has two cartesian-axis", async () => {
  const store = mockStore(appStore.getState());
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  await waitFor(
    () => {
      expect(
        container.querySelectorAll(".recharts-cartesian-axis-ticks").length
      ).toEqual(2);
    }
  );
});
