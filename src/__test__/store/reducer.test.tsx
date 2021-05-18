import { RootState} from "../../store/";
import dataReducer, {
  fetchCaseData,
} from "../../store/dataReducer";
import settingsReducer, {
  setDayCount,
  setDistrictAGS,

} from "../../store/settingsSlice";

function getRandomInt(min: number = 90, max: number = 2500) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getInitialDataState = (initial?: RootState["data"]) =>
  dataReducer(initial, {} as any);

const getInitialSettingsState = (initial?: RootState["settings"]) =>
  settingsReducer(initial, {} as any);

describe("Reducer data flow", () => {
  it("should match a snapshot", () => {
    const initialState = getInitialDataState();
    expect(initialState).toMatchSnapshot();
  });

  it("store data on contacts slice on fetchCaseData.fulfilled", () => {
    const initialState = getInitialDataState();
    const sampleResponse = { someKey: "someValue" };
    const state = dataReducer(
      initialState,
      //@ts-expect-error
      fetchCaseData.fulfilled(sampleResponse)
    );
    expect(state.caseData).toBe(sampleResponse);
    expect(state.error).toEqual(undefined);
    expect(state.caseDataStatus).toEqual("succeeded");
  });

  it("sets district AGS", () => {
    const initialState = getInitialSettingsState();
    const someAGS = "012345";
    const state = settingsReducer(initialState, setDistrictAGS(someAGS));
    expect(state.AGS).toEqual(someAGS);
  });

  it("sets selected contact", () => {
    const initialState = getInitialSettingsState();
    const someRandomNumber = getRandomInt()
    const state = settingsReducer(
      initialState,
      setDayCount(someRandomNumber)
    );
    expect(state.dayCount).toBe(someRandomNumber);
  });
});
