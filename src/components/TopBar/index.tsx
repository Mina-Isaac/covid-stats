import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { setDistrictAGS } from "../../store/settingsSlice";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import SideDrawer from "../SideDrawer";
import { ags } from "../../ags";

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1rem;
  height: max(10vh, 65px);
  border: 1px solid #808080ab;
  border-radius: 5px;
  margin: 0 -8px auto;
  background-color: #00000040;
`;

const searchFieldStyle = {
  minWidth: "25%",
  backgroundColor: "var(--bgColor)",
  borderRadius: "5px",
};

interface AGS {
  name: string;
  ags: string;
  population?: number;
}

const defaultDistrict: AGS = {
  name: "SK München",
  ags: "09162",
};

const TopBar: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Bar>
      <SearchInput
        onChange={(e, value: AGS | null) =>
          value && dispatch(setDistrictAGS(value.ags))
        }
        options={ags}
        defaultValue={defaultDistrict}
        inputLabel="Search by city name"
        style={searchFieldStyle}
        getOptionLabel={(option) => option.name}
        getOptionSelected = {(option: AGS)=>option.ags === defaultDistrict.ags}
      />
      <SideDrawer />
    </Bar>
  );
};

export default TopBar;
