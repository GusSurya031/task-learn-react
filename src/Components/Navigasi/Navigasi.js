import React from 'react';
import { Link } from 'react-router-dom'
import './Navigasi.css';
import Logo from '../../Image/LogoBrand.png';
import UserIcon from '../../Image/UserAttention.png';
import SearchIcon from '../../Image/SearchIcon.png';
import LoveIcon from '../../Image/LoveIcon.png';
import BucketIcon from '../../Image/BucketIcon.png';

export default function Navigasi() {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <img src={Logo} alt='Logo Surya Patisseries'></img>
        </div>
        <div className='nav-title'>
            <Link to ='/' id='Home'>Home</Link>
            <Link to ='/Shop' id='Home'>Shop</Link>
            <Link to ='/About' id='Home'>About</Link>
            <Link to ='/Contact' id='Home's>Contact</Link>
        </div>
        <div className='icon-container'>
            <img src={UserIcon} alt='User Attention'></img>
            <img src={SearchIcon} alt='Search Bar'></img>
            <img src={LoveIcon} alt='Love Icon'></img>
            <img src={BucketIcon} alt='Bucket Buy Icon'></img>
        </div>
    </div>
  )
}
