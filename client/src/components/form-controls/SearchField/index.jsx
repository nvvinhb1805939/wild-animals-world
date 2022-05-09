import SearchIcon from '@mui/icons-material/Search';
import { Box, Input, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

SearchField.propTypes = {
  name: PropTypes.string.isRequired,
  onSearchFocus: PropTypes.func,
  onSearchChange: PropTypes.func,
};
SearchField.defaultProps = {
  onSearchFocus: null,
  onSearchChange: null,
};

function SearchField({ name, onSearchFocus, onSearchChange }) {
  // const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   setSearchParams('');
  // }, []);
  const handleOnFocus = () => {
    if (onSearchFocus) onSearchFocus();
  };

  const handleOnSearchChange = e => {
    if (onSearchChange) onSearchChange(e.target.value.trim().toLowerCase());
  };

  return (
    <Box>
      <Input
        name={name}
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
