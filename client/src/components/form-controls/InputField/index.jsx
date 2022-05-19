import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  autoSize: PropTypes.bool,
};
InputField.defaultProps = {
  disabled: false,
  autoSize: false,
};

function InputField({ control, name, label, disabled, autoSize }) {
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
      render={({ field: { onChange, onBlur, value }, formState: { errors } }) => (
        <TextField
          id={name}
          name={name}
          label={label}
          onChange={event => onChange(event.target.value)}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          size='small'
          fullWidth
          {...textareaProps}
        />
      )}
    />
  );
}

export default InputField;
