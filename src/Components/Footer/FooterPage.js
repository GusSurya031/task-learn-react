import React from 'react';
import LogoBrand from '../../Image/LogoBrand-White.png';
import './FooterPage.css';
import { Link } from 'react-router-dom';
import LogoIg from '../../Image/Instagram.png';
import LogoEmail from '../../Image/Email.png';
import LogoLinkedin from '../../Image/Linkedin.png';
import LogoTwitter from '../../Image/Twitter.png';
import LogoWhatsapp from '../../Image/Whatsapp.png';

export default function FooterPage() {
  return (
    <div className='footer-section'>
        <div className='footer-container'>
            <div className='segment-footer'>
                <img src={LogoBrand} alt='Logo Surya Patisseries'></img>
                <p>Penatih, Denpasar Timur <br/>Kota Denpasar, Bali <br/>Indonesia</p>
            </div>
            <div className='segment-footer'>
                <h3>Links</h3>
                <li>
                    <Link to='/#' id='Home'>Home</Link> 
                </li>
                <li>
                    <Link to='/shop' id='Shop'>Shop</Link> 
                </li>
                <li>
                    <Link to='/contact' id='Contact'>Contact</Link> 
                </li>
                <li>
                    <Link to='/about' id='About'>About</Link> 
                </li>
            </div>
            <div className='segment-footer'>
                <h3>Helps</h3>
                <li>
                    <Link to='/payment' id='Payment'>Payment Shop</Link> 
                </li>
                <li>
                    <Link to='/return' id='Return'>Return</Link> 
                </li>
                <li>
                    <Link to='/privacy-policies' id='Privacy'>Privacy policies</Link> 
                </li>
            </div>
            <div className='segment-footer'>
                <h3>Social Media</h3>
                <li className='social'>
                    <img src={LogoEmail} alt='email'></img>
                    <img src={LogoIg} alt='email'></img>
                    <img src={LogoWhatsapp} alt='email'></img>
                    <img src={LogoLinkedin} alt='email'></img>
                    <img src={LogoTwitter} alt='email'></img>
                </li>
            </div>
        </div>
        <div className='line'></div>
        <div className='footer-bottom'>
            <span>2023 Rahmang. All right reserved</span>
        </div>
    </div>
  )
}
