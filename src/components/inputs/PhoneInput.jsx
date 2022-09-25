import React from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import {get} from 'lodash';

const PhoneNumberInput = ({ field = {}, form = {}, ...props }) => {
  const { errors, touched } = form;
  const fieldTouched = get(touched, field.name);
  const errorMessage = get(errors, field.name);
  return (
    <PhoneInput
      label="Outlined"
      variant="outlined"
      defaultErrorMessage={errorMessage}
      isValid={!Boolean(fieldTouched && errorMessage)}
      {...field}
      {...props}

      placeholder={props.label}
      inputProps={{
        name: field.name,
      }}
    />
  );
};

export default PhoneNumberInput;
