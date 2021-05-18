import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createFilterOptions } from "@material-ui/lab";

interface Props<T extends { [key: string]: any }> {
  options: T[];
  defaultValue?: T;
  onChange: (event: React.ChangeEvent<{}>, value: T | null) => void;
  inputLabel: string;
  disabled?: boolean;
  getOptionSelected?: (option: T) => boolean;
  getOptionLabel: (option: T) => string;
  style?: React.CSSProperties;
  limit?: number;
}

const SearchInput: React.FC<Props<any>> = (props) => {
  const { limit = 10, inputLabel, ...rest } = props;

  const defaultFilterOptions = createFilterOptions({
    limit: limit,
    ignoreCase: true,
  });
  return (
    <Autocomplete
      filterOptions={defaultFilterOptions}
      limitTags={limit}
      renderInput={(params) => (
        <TextField {...params} label={inputLabel} variant="filled" />
      )}
      {...rest}
    />
  );
};

export default React.memo(SearchInput);
