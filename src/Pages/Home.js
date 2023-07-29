
import React from 'react'
import Navigasi from '../Components/Navigasi/Navigasi';
import BannerHome from '../Section/Home/BannerHome';
import ProductSection from '../Section/Product/ProductSection';

export default function Home() {
  return (
    <div className='Home'>
      <Navigasi />
      <BannerHome />
      <ProductSection />
    </div>
  )
}
