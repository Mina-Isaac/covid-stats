import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface SettingsState {
  AGS: string | undefined;
  dayCount: number;
  drawnStats: {
    cases: boolean;
    incidence: boolean;
  };
}

const initialState: SettingsState = {
  AGS: "09162",
  dayCount: 90,
  drawnStats: {
    cases: true,
    incidence: true,
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setDistrictAGS: (state, { payload }: PayloadAction<string>) => {
      state.AGS = payload;
    },

    setDayCount: (state, { payload }: PayloadAction<number>) => {
      state.dayCount = payload;
    },

    setDrawnStats: (
      state,
      { payload }: PayloadAction<keyof SettingsState["drawnStats"]>
    ) => {
      state.drawnStats[payload] = !state.drawnStats[payload];
    },
  },
});

export const { setDistrictAGS, setDayCount, setDrawnStats } =
  settingsSlice.actions;

// Settings state selectors
const selectDistrictAGS = (state: RootState) => state.settings.AGS;

const selectDayCount = (state: RootState) => state.settings.dayCount;

const selectDrawnStats = (state: RootState) => state.settings.drawnStats;

export { selectDistrictAGS, selectDayCount, selectDrawnStats };

export default settingsSlice.reducer;
