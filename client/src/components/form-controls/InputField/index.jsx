import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Input, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

InputField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  onIconClick: PropTypes.func,
};
InputField.defaultProps = { onIconClick: null };

function InputField({ control, name, onIconClick }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <Input
          onChange={event => onChange(event.target.value)}
          startAdornment={
            <InputAdornment position='start'>
              <IconButton aria-label='search bird' edge='start' onClick={onIconClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          placeholder='Tìm kiếm'
          fullWidth
        />
      )}
    />
  );
}

export default InputField;
