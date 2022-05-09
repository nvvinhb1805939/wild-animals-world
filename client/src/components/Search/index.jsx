import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import animalsApi from '../../api/animalsApi';
import toSpinalCase, { toLatinString } from '../../utils/spinalCase';
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

  const [animals, setAnimals] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await animalsApi.getAll();
      setAnimals(response);
    })();
  }, []);

  const handleSearchChange = searchParams => {
    if (searchParams == '') setFilter([]);
    else {
      const newAnimals = animals.filter(item => toLatinString(item.vietnameseName).includes(searchParams));
      setFilter(newAnimals);
    }
  };

  const { control } = useForm({
    defaultValues: {
      animals: '',
    },
  });

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

  return (
    <Box sx={{ position: 'relative' }} ref={boxRef}>
      <form onSubmit={e => e.preventDefault()}>
        <SearchField name='animals' onSearchFocus={handleSearchFocus} onSearchChange={handleSearchChange} />
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

            display: 'flex',
            flexDirection: 'column',
            gap: 2,

            bgcolor: 'foreground.main',
            boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.15)',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,

            '& a:hover': {
              color: 'primary.main',
            },
          }}
        >
          {filter.length == 0 ? (
            <ListItem sx={{ flexDirection: 'column', alignItems: 'center' }}>
              <ListItemAvatar sx={{ minWidth: 'unset' }}>
                <Avatar>
                  <SearchIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Không có gì để hiển thị' />
            </ListItem>
          ) : (
            filter.map(item => (
              <Link to={`${toSpinalCase(item.vietnameseName + '-' + item.animal_ID)}`} onClick={handleClose}>
                <ListItem key={item.animal_ID} sx={{ gap: 1 }}>
                  <ListItemAvatar sx={{ minWidth: 'unset' }}>
                    <Avatar src={item.images[0].url} />
                  </ListItemAvatar>
                  <ListItemText primary={item.vietnameseName} />
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
