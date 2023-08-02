import React from 'react';
import './CardProduct.css';

export default function CardProduct(props) {
  return (
    <div className='card-container'>
      <div className='image-container' 
        style={{backgroundImage: `url(${props.image})`, backgroundPosition: `top`}}>
      </div>
      <div className='desc-container'>
        <div className='description-container'>
          <h3>{props.nameProduct}</h3>
          <p>{props.subNameProduct}</p>
        </div>
        <div className='price-container'>
          <span id='price'>IDR {props.harga}</span>
        </div>
      </div>
    </div>
  )
}
