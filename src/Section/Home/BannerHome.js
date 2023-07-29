import React from 'react';
import { Link } from 'react-router-dom';
import './BannerHome.css';

export default function BannerHome() {
  return (
    <div className='container-section-1'>
        <div className='transparent-bg'>
            <div className='container-banner'>
                <div className='container-banner-desc'>
                    <h4>Surya Patisseries</h4>
                    <h1>Home Made <br/>With Love <span>🤍</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
                </div>
                <div>
                    <button className='button-banner'>
                        <Link to='/Order'>Order Now</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
