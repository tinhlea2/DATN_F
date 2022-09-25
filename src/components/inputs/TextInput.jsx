import React from "react";
import { TextField } from "@material-ui/core";
import {get} from 'lodash';

const TextInput = ({ field = {}, form = {}, ...props }) => {
  const { errors, touched } = form;
  const fieldTouched = get(touched, field.name);
  const errorMessage = get(errors, field.name);
  return (
    <TextField
      label="Outlined"
      variant="outlined"
      error={Boolean(fieldTouched && errorMessage)}
      {...field}
      {...props}
      helperText={fieldTouched && errorMessage}
    />
  );
};

export default TextInput;
