import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectDrawnStats, setDrawnStats } from "../../store/settingsSlice";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Wrapper from "./Wrapper";
import styled from "styled-components";

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const DataSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const drawnStats = useAppSelector(selectDrawnStats);

  const toggleCheck =
    (key: keyof typeof drawnStats) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setDrawnStats(key));
    };

  return (
    <Wrapper label="Select Data">
      <InnerWrapper>
        <FormControlLabel
          control={
            <Checkbox
              checked={drawnStats.cases}
              onChange={toggleCheck("cases")}
              color="primary"
            />
          }
          label="Cases"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={drawnStats.incidence}
              onChange={toggleCheck("incidence")}
              color="primary"
            />
          }
          label="Incidence"
        />
      </InnerWrapper>
    </Wrapper>
  );
};

export default React.memo(DataSelector);
