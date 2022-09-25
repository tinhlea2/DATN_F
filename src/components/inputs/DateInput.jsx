import { KeyboardDatePicker } from "@material-ui/pickers";
import React from "react";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core";

const useKeyboardButtonStyle = makeStyles({
  root: {
    padding: "0px",
  },
});

const DateInput = ({ field = {}, form = {}, ...props }) => {
  const { errors, touched } = form;
  const fieldTouched = get(touched, field.name);
  const errorMessage = get(errors, field.name);
  const keyboardButtonStyle = useKeyboardButtonStyle();

  return (
    <KeyboardDatePicker
      error={Boolean(fieldTouched && errorMessage)}
      helperText={fieldTouched && errorMessage}
      format="MM/dd/yyyy"
      {...field}
      {...props}
      onChange={(date) => {
        form.setFieldValue(field.name, date); // override formik onchange callback
      }}
      KeyboardButtonProps={{
        "aria-label": "change date",
        className: keyboardButtonStyle.root
      }}
    />
  );
};

export default DateInput;
