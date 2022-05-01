import React from 'react';
import PropTypes from 'prop-types';
import { set, useForm } from 'react-hook-form';
import SearchField from '../form-controls/SearchField';
import { Box } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemAvatar } from '@mui/material';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ListItemText } from '@mui/material';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

Search.propTypes = {};

function Search(props) {
  const boxRef = useRef(null);
  const [isOpenSearchList, setIsOpenSearchList] = useState(false);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      animals: '',
    },
  });

  const handleSearchFocus = () => {
    setIsOpenSearchList(true);
  };

  const handleOnSubmit = data => console.log(data);

  useEffect(() => {
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
