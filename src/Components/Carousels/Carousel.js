import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'; // Import the CSS file

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    <div
      className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}
      onMouseEnter={() => setActiveIndex(0)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <h2 className='text-2xl font-semibold'>Basic Package</h2>
      <p className='mt-4'>Perfect for small businesses starting online.</p>
      <ul className='mt-4 text-center'>
        <li>- Responsive Design</li>
        <li>- 3 Pages</li>
        <li>- Contact Form</li>
      </ul>
    </div>,
    <div
      className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}
      onMouseEnter={() => setActiveIndex(1)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <h2 className='text-2xl font-semibold'>Standard Package</h2>
      <p className='mt-4'>
        Ideal for growing businesses looking for more features.
      </p>
      <ul className='mt-4 text-center'>
        <li>- Responsive Design</li>
        <li>- 5 Pages</li>
        <li>- E-Commerce Integration</li>
        <li>- Blog Setup</li>
      </ul>
    </div>,
    <div
      className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}
      onMouseEnter={() => setActiveIndex(2)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <h2 className='text-2xl font-semibold'>Premium Package</h2>
      <p className='mt-4'>
        For businesses needing custom solutions and advanced features.
      </p>
      <ul className='mt-4 text-center'>
        <li>- Responsive Design</li>
        <li>- Unlimited Pages</li>
        <li>- Custom Development</li>
        <li>- SEO Optimization</li>
      </ul>
    </div>
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
  };

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy='alternate'
      autoPlay
      autoPlayInterval={3000}
      transitionTimingFunction="linear"
      infinite
      disableDotsControls
      disableButtonsControls
      paddingLeft={60}
    />
  );
};

export default Carousel;
