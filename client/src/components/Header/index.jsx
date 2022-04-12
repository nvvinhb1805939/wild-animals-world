import { AppBar, Button, Container, Toolbar } from '@mui/material';
import React from 'react';
import Logo from '../Logo';
import Search from '../Search';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

Header.propTypes = {
  color: PropTypes.string,
};
Header.defaultProps = {
  color: 'primary',
};

function Header({ color }) {
  const user = useSelector(state => state.user);
  const userData = user.data?.user || {};
  console.log(userData);
  return (
    <AppBar color={color}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Logo />
          <div style={{ flexBasis: '50%' }}>
            <Search />
          </div>
          {Object.keys(userData).length === 0 ? (
            <Button size='medium' variant='contained' color='primary'>
              <Link to='authencation'>Đăng nhập</Link>
            </Button>
          ) : (
            <Avatar />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
