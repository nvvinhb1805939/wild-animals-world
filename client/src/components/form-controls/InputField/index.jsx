import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  autoSize: PropTypes.bool,
};
InputField.defaultProps = {
  required: false,
  autoSize: false,
};

function InputField({ control, name, label, required, autoSize }) {
  const textareaProps = autoSize
    ? {
        multiline: true,
        minRows: 5,
      }
    : {};
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextField
          id={name}
          name={name}
          label={label}
          onChange={event => onChange(event.target.value)}
          value={value}
          required={required}
          size='small'
          fullWidth
          {...textareaProps}
        />
      )}
    />
  );
}

export default InputField;
