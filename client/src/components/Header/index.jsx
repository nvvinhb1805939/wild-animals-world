import { AppBar, Avatar, Button, Container, Skeleton, Toolbar } from '@mui/material';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AccountMenu from '../AccountMenu';
import Logo from '../Logo';
import Search from '../Search';
import { LoadingContext } from '../../App';

function Header() {
  const { loading } = useContext(LoadingContext);
  const user = useSelector(state => state.user);
  const userData = user.data || {};

  return (
    <AppBar color='foreground'>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {loading ? (
            <Skeleton variant='circular'>
              <Avatar />
            </Skeleton>
          ) : (
            <Logo />
          )}
          <div style={{ flexBasis: '50%' }}>
            {loading ? (
              <Skeleton variant='rectangular' width='100%'>
                <Search />
              </Skeleton>
            ) : (
              <Search />
            )}
          </div>
          {Object.keys(userData).length === 0 ? (
            loading ? (
              <Skeleton variant='circular'>
                <Button size='medium' variant='contained' color='primary'>
                  <Link to='login'>Đăng nhập</Link>
                </Button>
              </Skeleton>
            ) : (
              <Button size='medium' variant='contained' color='primary'>
                <Link to='login'>Đăng nhập</Link>
              </Button>
            )
          ) : loading ? (
            <Skeleton variant='circular'>
              <Avatar />
            </Skeleton>
          ) : (
            <AccountMenu userData={userData} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
