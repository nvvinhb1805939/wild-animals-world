import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

SearchField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

function SearchField({ control, name }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <Input
          onChange={onChange}
          startAdornment={
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          }
          placeholder='Tìm kiếm'
          fullWidth
        />
      )}
    />
  );
}

export default SearchField;
