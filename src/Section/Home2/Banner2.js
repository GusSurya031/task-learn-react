import React from 'react'
import BannerShop from '../../Image/BannerShop.png';
import './Banner2.css';


export default function Banner2() {
  return (
    <div className='banner-container' style={{backgroundImage: `url(${BannerShop})`}}>
      <div className='title-banner'>
        <h1>Shop</h1>
        <p>Customer Desire Comes First</p>
      </div>
    </div>
  )
}
