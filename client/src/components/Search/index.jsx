import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, CircularProgress, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useDebouncedSearch from '../../hooks/useDebouncedSearch';
import toSpinalCase from '../../utils/spinalCase';
import SearchField from '../form-controls/SearchField';

Search.propTypes = {
  isContainSearchList: PropTypes.bool,
};
Search.defaultProps = {
  isContainSearchList: true,
};

function Search({ isContainSearchList }) {
  const boxRef = useRef(null);
  const [isOpenSearchList, setIsOpenSearchList] = useState(false);
  const { inputText, setInputText, searchResults } = useDebouncedSearch();

  const handleSearchFocus = () => {
    if (!isContainSearchList) return;
    setIsOpenSearchList(true);
  };

  const handleClose = () => {
    setIsOpenSearchList(false);
  };

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
  console.log(searchResults.loading, searchResults.result);

  return (
    <Box sx={{ position: 'relative' }} ref={boxRef}>
      <form onSubmit={e => e.preventDefault()}>
        <SearchField name='animals' value={inputText} onSearchFocus={handleSearchFocus} onSearchChange={setInputText} />
      </form>
      {isOpenSearchList && (
        <List
          sx={{
            position: 'absolute',
            top: '100%',
            width: '100%',
            py: 4,
            px: 2,

            minHeight: 200,
            maxHeight: 500,

            display: 'flex',
            flexDirection: 'column',
            gap: 2,

            bgcolor: 'foreground.main',
            boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.15)',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            overflowY: 'auto',

            '& a:hover': {
              color: 'primary.main',
            },
          }}
        >
          {searchResults.loading && (
            <ListItem
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'fit-content',
              }}
            >
              <CircularProgress />
            </ListItem>
          )}
          {searchResults.result?.length == 0 ? (
            <ListItem sx={{ flexDirection: 'column', alignItems: 'center' }}>
              <ListItemAvatar sx={{ minWidth: 'unset' }}>
                <Avatar>
                  <SearchIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Không có gì để hiển thị' />
            </ListItem>
          ) : (
            searchResults.result?.map(animal => (
              <Link
                key={animal.animal_ID}
                to={`${toSpinalCase(animal.vietnameseName + '-' + animal.animal_ID)}`}
                onClick={handleClose}
              >
                <ListItem key={animal.animal_ID} sx={{ gap: 1 }}>
                  <ListItemAvatar sx={{ minWidth: 'unset' }}>
                    <Avatar src={animal.images[0].url} />
                  </ListItemAvatar>
                  <ListItemText primary={animal.vietnameseName} />
                </ListItem>
              </Link>
            ))
          )}
        </List>
      )}
    </Box>
  );
}

export default Search;
