
import React from 'react'
import Navigasi from '../Components/Navigasi/Navigasi';
import BannerHome from '../Section/Home/BannerHome';
import ProductSection from '../Section/VarriantSection/VarriantProduct';
import DisplayProduct from '../Section/ProductSection/DisplayProduct';
import FooterPage from '../Components/Footer/FooterPage';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='Home' id='#'>
      <Navigasi />
      <BannerHome />
      <ProductSection />
      <DisplayProduct />
      <FooterPage />
    </div>
  )
}
