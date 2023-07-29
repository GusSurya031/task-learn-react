import React from 'react';
import Card from '../../Components/CardProduct/Card';
import BannerSection from '../../Image/ProductSection2.png';
import './Section2.css';

export default function ProductSection() {
  return (
    <>
        <div className='section2-title'>
            <h1>New Varriant New Flavour</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='container-section2'>
            <div className='container-image'>
                <img src={BannerSection} alt='Tiramissu Mile Crepes'></img>
            </div>
            <div className='container-card'>
                <Card 
                image = {process.env.PUBLIC_URL + '/WeddingCake.png'}
                label ='wedding Cake'
                />
                <Card 
                image = {process.env.PUBLIC_URL + '/BirthdayCake.png'}
                label ='Birthday Cake'
                />
            </div>
            <div className='container-card'>
                <Card 
                image = {process.env.PUBLIC_URL + '/HampersCake.png'}
                label ='Hampers Cake'
                />
            </div>
        </div>
    </>
  )
}
