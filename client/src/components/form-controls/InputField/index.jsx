import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
InputField.defaultProps = {
  required: false,
};

function InputField({ control, name, label, required }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <TextField id={name} name={name} label={label} onChange={onChange} required={required} size='small' fullWidth />
      )}
    />
  );
}

export default InputField;
