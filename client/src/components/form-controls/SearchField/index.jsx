import SearchIcon from '@mui/icons-material/Search';
import { Box, Input, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

SearchField.propTypes = {
  name: PropTypes.string.isRequired,
  onSearchFocus: PropTypes.func,
  onSearchChange: PropTypes.func,
  value: PropTypes.string,
};
SearchField.defaultProps = {
  onSearchFocus: null,
  onSearchChange: null,
  value: '',
};

function SearchField({ name, onSearchFocus, onSearchChange, value }) {
  const handleOnFocus = () => {
    if (onSearchFocus) onSearchFocus();
  };

  const handleOnSearchChange = e => {
    if (onSearchChange) onSearchChange(e.target.value);
  };

  return (
    <Box>
      <Input
        name={name}
        value={value}
        inputProps={{ onFocus: handleOnFocus }}
        onChange={handleOnSearchChange}
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        }
        placeholder='Tìm kiếm'
        fullWidth
      />
    </Box>
  );
}

export default SearchField;
