import { Typography } from '@mui/material';
import { Box, Container, List, ListItem } from '@mui/material';
import React from 'react';
import Logo from '../Logo';

function Footer(props) {
  return (
    <Box component='footer' sx={{ py: 4, bgcolor: 'foreground.main', textAlign: 'center', boxShadow: 0 }}>
      <Container>
        <Logo />
        <List
          sx={{
            py: 4,
            my: 4,

            border: '1px solid transparent',
            borderTopColor: 'background.main',
            borderBottomColor: 'background.main',
          }}
        >
          <ListItem sx={{ justifyContent: 'center', gap: 1 }}>
            Địa chỉ: Khu II Đại học Cần Thơ, 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ
          </ListItem>
          <ListItem sx={{ justifyContent: 'center', gap: 1, '& a:hover': { color: 'primary.main' } }}>
            Hotline:{' '}
            <a className='footer__link' href='tel:+84123456789'>
              0123456789
            </a>
          </ListItem>
          <ListItem sx={{ justifyContent: 'center', gap: 1, '& a:hover': { color: 'primary.main' } }}>
            Email:{' '}
            <a className='footer__link' href='mailto:bird@gmail.com'>
              bird@gmail.com'
            </a>
          </ListItem>
        </List>
        <Typography>© .waw - Nền tảng tra cứu thông tin các loài động vật hoang dã</Typography>
      </Container>
    </Box>
  );
}

export default Footer;
