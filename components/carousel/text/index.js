import React from 'react';
import Slider from 'react-slick';

const TextCarouselSlider = ({ text }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
    // pauseOnHover: true,
    cssEase: 'linear',
    // arrows: true,
    adaptiveHeight: true,
  };
  return (
    <div className="p-1 text-center" style={{ background: 'white' }}>
      <Slider {...settings}>
        {text.map((item, idx) => (
          <div key={idx}>
            <p>{item.message}</p>
            <p>~ {item.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TextCarouselSlider;
