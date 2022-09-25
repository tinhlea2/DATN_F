import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

const SelectInput = ({ field = {}, form = {}, ...props }) => {
  const { options = [], id, label, ...restProps } = props;
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id={id} style={{backgroundColor: "white"}}>{label}</InputLabel>
      <Select {...field} {...restProps} id={id}>
        {options.map(({ key, label }) => {
          return (
            <MenuItem value={key} key={key}>
              {label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
