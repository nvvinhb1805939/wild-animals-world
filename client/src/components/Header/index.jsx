import { AppBar, Button, Container, Toolbar } from '@mui/material';
import React from 'react';
import Logo from '../Logo';
import Search from '../Search';
import PropTypes from 'prop-types';

Header.propTypes = {
  color: PropTypes.string,
};
Header.defaultProps = {
  color: 'primary',
};

function Header({ color }) {
  return (
    <AppBar color={color}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Logo />
          <div style={{ flexBasis: '50%' }}>
            <Search />
          </div>
          <Button size='medium' variant='contained' color='primary'>
            Đăng nhập
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
