import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import SearchField from '../form-controls/SearchField';
import PropTypes from 'prop-types';

Search.propTypes = {
  isContainSearchList: PropTypes.bool,
};
Search.defaultProps = {
  isContainSearchList: true,
};

function Search({ isContainSearchList }) {
  const boxRef = useRef(null);
  const [isOpenSearchList, setIsOpenSearchList] = useState(false);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      animals: '',
    },
  });

  const handleSearchFocus = () => {
    if (!isContainSearchList) return;
    setIsOpenSearchList(true);
  };

  const handleOnSubmit = data => console.log(data);

  useEffect(() => {
    if (!isContainSearchList) return;

    const handleClickOutside = event => {
      if (!boxRef.current?.contains(event.target)) {
        setIsOpenSearchList(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [boxRef]);

  return (
    <Box sx={{ position: 'relative' }} ref={boxRef}>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <SearchField control={control} name='animals' onSearchFocus={handleSearchFocus} />
      </form>
      {isOpenSearchList && (
        <List
          sx={{
            position: 'absolute',
            top: '100%',
            width: '100%',
            py: 4,
            minHeight: 200,

            bgcolor: 'foreground.main',
            boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.15)',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <ListItem sx={{ flexDirection: 'column', alignItems: 'center' }}>
            <ListItemAvatar sx={{ minWidth: 'unset' }}>
              <Avatar>
                <SearchIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Không có gì để hiển thị' />
          </ListItem>
        </List>
      )}
    </Box>
  );
}

export default Search;
