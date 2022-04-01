import React from 'react';
import Slider from 'react-slick';

const ImageCarouselSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: 'linear',
    arrows: false,
    adaptiveHeight: true,
  };
  return (
    <Slider {...settings}>
      {images.map((item, idx) => (
        <img
          key={idx}
          src={item.img}
          alt={item.alt}
          width="100%"
          height="400"
          fit={'cover'}
        />
      ))}
    </Slider>
  );
};

export default ImageCarouselSlider;
