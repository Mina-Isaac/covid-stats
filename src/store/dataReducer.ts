import {
  createAsyncThunk,
  createReducer,
  SerializedError,
} from "@reduxjs/toolkit";
import { RootState } from ".";
import { CaseAPIResponse, IncidenceAPIResponse, ErrorResponse } from "./types";
import service from "../services";

export interface DataState {
  caseData: CaseAPIResponse | ErrorResponse | undefined;
  caseDataStatus: "idle" | "loading" | "failed" | "succeeded";

  incidenceData: IncidenceAPIResponse | ErrorResponse | undefined;
  incidenceDataStatus: "idle" | "loading" | "failed" | "succeeded";

  error: SerializedError | string | undefined;
}

const initialState: DataState = {
  caseData: undefined,
  caseDataStatus: "idle",

  incidenceData: undefined,
  incidenceDataStatus: "idle",

  error: undefined,
};

export const fetchCaseData = createAsyncThunk(
  "data/cases",
  async (_: void, { getState, rejectWithValue }) => {
    const {
      settings: { AGS, dayCount },
    } = getState() as RootState;

    if (AGS) {
      const response = await service.fetchCaseData({ AGS, dayCount });
      if (response?.error) return rejectWithValue(response.error);
      return response;
    }
  }
);

export const fetchIncidenceData = createAsyncThunk(
  "data/incidence",
  async (_: void, { getState, rejectWithValue }) => {
    const {
      settings: { AGS, dayCount },
    } = getState() as RootState;

    if (AGS) {
      const response = await service.fetchIncidenceData({ AGS, dayCount });
      if (response?.error) return rejectWithValue(response.error);
      return response;
    }
  }
);

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCaseData.pending, (state) => {
      state.caseDataStatus = "loading";
      state.error = undefined;
    })

    .addCase(fetchCaseData.fulfilled, (state, { payload }) => {
      state.caseDataStatus = "succeeded";
      state.caseData = payload;
    })

    .addCase(fetchCaseData.rejected, (state, action) => {
      state.caseDataStatus = "failed";
      state.error = action.payload as string || action.error;
    })
    .addCase(fetchIncidenceData.pending, (state) => {
      state.incidenceDataStatus = "loading";
    })
    .addCase(fetchIncidenceData.fulfilled, (state, { payload }) => {
      state.incidenceDataStatus = "succeeded";
      state.incidenceData = payload;
    })
    .addCase(fetchIncidenceData.rejected, (state, action) => {
      state.incidenceDataStatus = "failed";
      state.error = action.payload as string || action.error;
    });
});

// Selectors related to data state

const selectCaseHistory = ({
  data,
  settings: { AGS: districtAGS },
}: RootState) => districtAGS ? data?.caseData?.data?.[districtAGS]?.history: undefined;

const selectIncidenceHistory = ({
  data,
  settings: { AGS: districtAGS },
}: RootState) =>
  districtAGS ? data.incidenceData?.data?.[districtAGS]?.history : undefined;

const selectCaseDataStatus = (state: RootState) => state.data.caseDataStatus;
const selectIncidenceDataStatus = (state: RootState) =>
  state.data.incidenceDataStatus;

const selectError = (state: RootState) => state.data.error;

export {
  selectCaseHistory,
  selectIncidenceHistory,
  selectCaseDataStatus,
  selectIncidenceDataStatus,
  selectError,
};

export default dataReducer;
