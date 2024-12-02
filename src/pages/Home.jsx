import React from 'react';
import CarrouselImg from '../components/pagHome/CarrouselImg';
import Moldes from '../components/pagHome/Moldes';

const images = [
  '/images/locamania1.png',
  '/images/locamania2.png',
  '/images/locamania3.png'
];

export default function Home() {
  return (
    <div>
      <CarrouselImg images={images} />,
      <Moldes />
    </div>
  )
}
