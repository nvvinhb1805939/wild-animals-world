import { Container } from '@mui/material';
import React from 'react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.scss';
import PropTypes from 'prop-types';

Slider.propTypes = {
  images: PropTypes.array.isRequired,
  paddingY: PropTypes.number,
  variant: PropTypes.string,
};
Slider.defaultProps = {
  paddingY: 0,
  variant: '',
};

function Slider({ images, paddingY, variant }) {
  return (
    <Container className={`slider slider--${variant}`} sx={{ py: paddingY }} maxWidth='md' component='section'>
      <Swiper
        modules={[Pagination, Navigation, EffectCoverflow]}
        effect='coverflow'
        coverflowEffect={{
          rotate: 50,
          slideShadows: false,
        }}
        centeredSlides={true}
        slidesPerView='auto'
        loop={true}
        pagination={{
          clickable: true,
        }}
        speed={500}
        navigation={true}
        grabCursor={true}
        wrapperTag='ul'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} tag='li'>
            <img src={image} alt={image} className='slider__img' />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
