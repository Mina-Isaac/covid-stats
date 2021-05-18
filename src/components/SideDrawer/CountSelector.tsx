import React from "react";
import Slider from "@material-ui/core/Slider";
import Wrapper from "./Wrapper";
import { selectDayCount, setDayCount } from "../../store/settingsSlice";
import { fetchCaseData, fetchIncidenceData } from "../../store/dataReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const CountSlider: React.FC = () => {
  const dayCount = useAppSelector(selectDayCount);
  const dispatch = useAppDispatch();

  const handleChange = (event: any, newValue: number | number[]) => {
    dispatch(setDayCount(newValue as number));
  };
  const handleDragEnd = () => {
    dispatch(fetchCaseData());
    dispatch(fetchIncidenceData());
  };

  return (
    <Wrapper label="Adjust Day Count">
      <Slider
        value={dayCount}
        onChange={handleChange}
        onChangeCommitted={handleDragEnd}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={60}
        max={365}
      />
    </Wrapper>
  );
};

export default React.memo(CountSlider);
