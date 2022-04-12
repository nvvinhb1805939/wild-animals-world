import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Controller } from 'react-hook-form';
import { useState } from 'react';

PasswordField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
};
PasswordField.defaultProps = {
  label: '',
  required: false,
};

function PasswordField({ control, name, label, required }) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickToggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <FormControl variant='outlined' size='small' fullWidth>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <OutlinedInput
            id={name}
            name={name}
            type={isShowPassword ? 'text' : 'password'}
            onChange={onChange}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton aria-label='toggle password visibility' onClick={handleClickToggleShowPassword} edge='end'>
                  {isShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            fullWidth
            required={required}
          />
        )}
      />
    </FormControl>
  );
}

export default PasswordField;
