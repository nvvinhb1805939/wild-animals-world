import { Container } from '@mui/material';
import React from 'react';
import Logo from '../Logo';
import './Footer.scss';

function Footer(props) {
  return (
    <footer className='footer'>
      <Container>
        <Logo />
        <div className='footer__contact'>
          <ul className='footer__contact-list'>
            <li className='footer__contact-item'>
              Địa chỉ: Khu II Đại học Cần Thơ, 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ
            </li>
            <li className='footer__contact-item'>
              Hotline:{' '}
              <a className='footer__link' href='tel:+84123456789'>
                0123456789
              </a>
            </li>
            <li className='footer__contact-item'>
              Email:{' '}
              <a className='footer__link' href='mailto:bird@gmail.com'>
                bird@gmail.com'
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__copyright'>© .waw - Nền tảng tra cứu thông tin các loài động vật hoang dã</div>
      </Container>
    </footer>
  );
}

export default Footer;
