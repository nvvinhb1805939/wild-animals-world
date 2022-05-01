import { AppBar, Button, Container, Toolbar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AccountMenu from '../AccountMenu';
import Logo from '../Logo';
import Search from '../Search';

function Header() {
  const user = useSelector(state => state.user);
  const userData = user.data || {};

  return (
    <AppBar color='foreground'>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Logo />
          <div style={{ flexBasis: '50%' }}>
            <Search />
          </div>
          {Object.keys(userData).length === 0 ? (
            <Button size='medium' variant='contained' color='primary'>
              <Link to='login'>Đăng nhập</Link>
            </Button>
          ) : (
            <AccountMenu userData={userData} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
