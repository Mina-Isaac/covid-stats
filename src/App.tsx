import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  fetchCaseData,
  fetchIncidenceData,
  selectCaseDataStatus,
  selectIncidenceDataStatus,
} from "./store/dataReducer";
import { selectDistrictAGS, selectDrawnStats } from "./store/settingsSlice";
import LineChart from "./components/LineChart";
import TopBar from "./components/TopBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorMessage from "./components/ErrorMessage";
import { Container, ChartContainer } from "./components/Containers";
import { generateYDataKeys, useConsolidatedData } from "./utils";

function App() {
  const dispatch = useAppDispatch();
  const selectedAGS = useAppSelector(selectDistrictAGS);
  const drawnStats = useAppSelector(selectDrawnStats);
  const caseStatus = useAppSelector(selectCaseDataStatus);
  const incidenceStatus = useAppSelector(selectIncidenceDataStatus);
  const isLoading = caseStatus === "loading" || incidenceStatus === "loading";
  const dataError = caseStatus === "failed" || incidenceStatus === "failed";

  useEffect(() => {
    if (selectedAGS !== undefined) {
      dispatch(fetchCaseData());
      dispatch(fetchIncidenceData());
    }
  }, [dispatch, selectedAGS]);

  const data = useConsolidatedData();

  return (
    <Container>
      <TopBar />
      {isLoading && (
        <CircularProgress size={80} color="inherit" thickness={4.5} />
      )}
      {dataError && <ErrorMessage />}
      {!isLoading && !dataError && (
        <ChartContainer>
          <LineChart
            data={data}
            xDataKey="date"
            yDataKeys={generateYDataKeys(drawnStats)}
          />
        </ChartContainer>
      )}
    </Container>
  );
}

export default App;
